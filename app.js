/**
 * Fatloss Diet Plan Creator - User-Friendly & Clean Logic
 * Focused on: Breakfast, Lunch, Dinner, Water Intake, Quality Calories, and Grocery List
 * 100% In-Browser, Zero Logins, Zero Jargon.
 */

(function () {
  'use strict';

  // State Management
  let appState = {
    user: null,
    plan: null,
    activeDayIndex: 0, // 0 to 6
    checkedMeals: {},
    waterGlassesDrank: 0,
    groceryList: null,
    customGroceryItems: []
  };

  const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const SHORT_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // DOM Elements
  const dietForm = document.getElementById('dietForm');
  const resultsSection = document.getElementById('resultsSection');
  const btnSample = document.getElementById('btnSample');
  const btnRegenerate = document.getElementById('btnRegenerate');
  const btnEditProfile = document.getElementById('btnEditProfile');
  const btnPrintPlan = document.getElementById('btnPrintPlan');
  const btnCopyPlan = document.getElementById('btnCopyPlan');
  const daysTabNav = document.getElementById('daysTabNav');
  const dayPlanContainer = document.getElementById('dayPlanContainer');
  const waterGlassesRow = document.getElementById('waterGlassesRow');
  const waterProgressText = document.getElementById('waterProgressText');
  const toastNotice = document.getElementById('toastNotice');

  // Grocery Elements
  const groceryCategoriesGrid = document.getElementById('groceryCategoriesGrid');
  const groceryProgressInfo = document.getElementById('groceryProgressInfo');
  const groceryProgressFill = document.getElementById('groceryProgressFill');
  const customItemInput = document.getElementById('customItemInput');
  const btnAddCustomItem = document.getElementById('btnAddCustomItem');
  const btnCopyGrocery = document.getElementById('btnCopyGrocery');
  const btnPrintGrocery = document.getElementById('btnPrintGrocery');
  const btnClearCheckedGrocery = document.getElementById('btnClearCheckedGrocery');

  // Initialize Grocery Database
  function initGroceryList() {
    if (!appState.groceryList) {
      appState.groceryList = JSON.parse(JSON.stringify(KERALA_DIET_DATABASE.groceryDatabase));
    }
  }

  // Load Saved Plan
  function loadPersistedState() {
    try {
      const saved = localStorage.getItem('kerala_fatloss_diet_state_v3');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.user && parsed.plan) {
          appState = parsed;
          initGroceryList();
          renderAll();
          resultsSection.style.display = 'block';
        }
      }
    } catch (e) {
      console.warn('Could not load plan', e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem('kerala_fatloss_diet_state_v3', JSON.stringify(appState));
    } catch (e) {
      console.warn('Could not save plan', e);
    }
  }

  function showToast(message) {
    if (!toastNotice) return;
    toastNotice.textContent = message;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 2800);
  }

  // Calorie & Water Calculation (Simple & Safe)
  function calculateNutritionProfile(formData) {
    const { gender, age, height, weight, targetWeight, activity, diet } = formData;

    // BMR (Mifflin-St Jeor)
    let bmr = (10 * weight) + (6.25 * height) - (5 * age);
    bmr += (gender === 'male' ? 5 : -161);

    const activityFactors = {
      sedentary: 1.2,
      light: 1.35,
      moderate: 1.5,
      very_active: 1.7
    };
    const tdee = Math.round(bmr * (activityFactors[activity] || 1.2));

    // Healthy 500 kcal deficit for safe fat loss (~0.5 kg / week)
    let targetCalories = tdee - 500;
    const safeMin = gender === 'male' ? 1500 : 1250;
    if (targetCalories < safeMin) targetCalories = safeMin;

    // Clean macros
    const proteinGrams = Math.round(weight * 1.6);
    const fatGrams = Math.round((targetCalories * 0.25) / 9);
    const carbGrams = Math.round((targetCalories - (proteinGrams * 4) - (fatGrams * 9)) / 4);

    // Water: ~38 ml per kg
    const waterLiters = ((weight * 38) / 1000).toFixed(1);
    const waterGlasses = Math.max(8, Math.round((weight * 38) / 250));

    return {
      targetCalories,
      proteinGrams,
      carbGrams,
      fatGrams,
      waterLiters: parseFloat(waterLiters),
      waterGlasses,
      weightDiff: Math.max(0, (weight - targetWeight).toFixed(1))
    };
  }

  // Generate 7 Days of Simple Meals (Breakfast, Lunch + Salad, Dinner + Salad, Snacks)
  function generate7DayPlan(userProfile) {
    const diet = userProfile.diet;
    const daysPlan = [];

    const eligibleBreakfasts = KERALA_DIET_DATABASE.breakfasts.all.filter(b => b.type.includes(diet));

    let eligibleLunches = [];
    if (diet === 'non-veg') {
      eligibleLunches = [...KERALA_DIET_DATABASE.lunches.nonVeg, ...KERALA_DIET_DATABASE.lunches.vegetarian];
    } else if (diet === 'pescatarian') {
      eligibleLunches = [
        ...KERALA_DIET_DATABASE.lunches.nonVeg.filter(l => l.type.includes('pescatarian')),
        ...KERALA_DIET_DATABASE.lunches.vegetarian
      ];
    } else if (diet === 'eggetarian') {
      eligibleLunches = [
        ...KERALA_DIET_DATABASE.lunches.nonVeg.filter(l => l.type.includes('eggetarian')),
        ...KERALA_DIET_DATABASE.lunches.vegetarian
      ];
    } else {
      eligibleLunches = [...KERALA_DIET_DATABASE.lunches.vegetarian];
    }

    const eligibleDinners = KERALA_DIET_DATABASE.dinners.all.filter(d => d.type.includes(diet));

    for (let i = 0; i < 7; i++) {
      const dayName = DAYS[i];
      const shortName = SHORT_DAYS[i];
      const breakfast = eligibleBreakfasts[i % eligibleBreakfasts.length];
      const lunch = eligibleLunches[i % eligibleLunches.length];
      const dinner = eligibleDinners[i % eligibleDinners.length];
      const salad = KERALA_DIET_DATABASE.salads[i % KERALA_DIET_DATABASE.salads.length];
      const snack = KERALA_DIET_DATABASE.eveningSnacks[i % KERALA_DIET_DATABASE.eveningSnacks.length];
      const morningDrink = KERALA_DIET_DATABASE.morningBoosts[i % KERALA_DIET_DATABASE.morningBoosts.length];

      const dayCalories = breakfast.calories + lunch.calories + dinner.calories + salad.calories + snack.calories + morningDrink.calories;
      const dayProtein = Math.round(breakfast.protein + lunch.protein + dinner.protein + snack.protein);

      daysPlan.push({
        dayIndex: i,
        dayName,
        shortName,
        totals: {
          calories: dayCalories,
          protein: dayProtein
        },
        meals: {
          morningDrink,
          breakfast,
          lunch,
          salad,
          snack,
          dinner
        }
      });
    }

    return daysPlan;
  }

  // Swap Single Meal
  function swapSingleMeal(dayIndex, mealCategory) {
    if (!appState.plan || !appState.plan[dayIndex]) return;
    const currentDay = appState.plan[dayIndex];
    const diet = appState.user.diet;

    let candidates = [];
    if (mealCategory === 'breakfast') {
      candidates = KERALA_DIET_DATABASE.breakfasts.all.filter(b => b.type.includes(diet));
    } else if (mealCategory === 'lunch') {
      if (diet === 'non-veg') {
        candidates = [...KERALA_DIET_DATABASE.lunches.nonVeg, ...KERALA_DIET_DATABASE.lunches.vegetarian];
      } else if (diet === 'pescatarian') {
        candidates = [
          ...KERALA_DIET_DATABASE.lunches.nonVeg.filter(l => l.type.includes('pescatarian')),
          ...KERALA_DIET_DATABASE.lunches.vegetarian
        ];
      } else if (diet === 'eggetarian') {
        candidates = [
          ...KERALA_DIET_DATABASE.lunches.nonVeg.filter(l => l.type.includes('eggetarian')),
          ...KERALA_DIET_DATABASE.lunches.vegetarian
        ];
      } else {
        candidates = [...KERALA_DIET_DATABASE.lunches.vegetarian];
      }
    } else if (mealCategory === 'dinner') {
      candidates = KERALA_DIET_DATABASE.dinners.all.filter(d => d.type.includes(diet));
    }

    if (!candidates || candidates.length <= 1) {
      showToast("No alternate option available.");
      return;
    }

    const currentMealId = currentDay.meals[mealCategory].id || currentDay.meals[mealCategory].name;
    const filtered = candidates.filter(c => (c.id || c.name) !== currentMealId);
    const newMeal = filtered[Math.floor(Math.random() * filtered.length)];

    currentDay.meals[mealCategory] = newMeal;

    // Recalculate day calories
    const m = currentDay.meals;
    currentDay.totals.calories = m.breakfast.calories + m.lunch.calories + m.dinner.calories + m.salad.calories + m.snack.calories + m.morningDrink.calories;
    currentDay.totals.protein = Math.round(m.breakfast.protein + m.lunch.protein + m.dinner.protein + m.snack.protein);

    saveState();
    renderDayPlan();
    showToast(`Swapped ${mealCategory} for ${currentDay.dayName}!`);
  }

  // Render Clean Summary Dashboard (Friendly, Zero Jargon)
  function renderSummaryDashboard() {
    const u = appState.user;
    if (!u) return;

    // Friendly Profile Header: No confusing phrases!
    const profileSummaryHtml = `
      <div class="user-profile-summary">
        <div class="profile-avatar">${u.gender === 'male' ? '♂' : '♀'}</div>
        <div class="profile-details">
          <h3>Your 7-Day Diet Plan</h3>
          <p class="profile-subtitle">Simple, delicious meals customized for your fat loss goal.</p>
          <div class="profile-tags">
            <span class="profile-tag">Current: ${u.weight} kg</span>
            <span class="profile-tag">Target: ${u.targetWeight} kg</span>
            <span class="profile-tag" style="text-transform: capitalize; color: #fb7185; font-weight: 700;">${u.diet.replace('-', ' ')}</span>
          </div>
        </div>
      </div>
      <div class="dashboard-actions">
        <button class="btn-secondary" id="btnEditProfileTop">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          Change Details
        </button>
        <button class="btn-secondary btn-accent" id="btnRegenerateTop">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
          Generate New Plan
        </button>
      </div>
    `;

    const topElem = document.getElementById('dashboardTop');
    if (topElem) {
      topElem.innerHTML = profileSummaryHtml;
      document.getElementById('btnEditProfileTop').addEventListener('click', onEditProfileClick);
      document.getElementById('btnRegenerateTop').addEventListener('click', onRegeneratePlanClick);
    }

    // 4 Simple Metrics: Calories, Water, Protein, Weight Goal
    const metricsContainer = document.getElementById('metricsGrid');
    if (metricsContainer) {
      metricsContainer.innerHTML = `
        <div class="metric-card calories">
          <div class="metric-header">
            <span class="metric-title">Daily Calories</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" style="width:20px;height:20px;"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
          </div>
          <div class="metric-val">${u.nutrition.targetCalories} <span>kcal / day</span></div>
          <div class="metric-sub">Healthy calorie limit to burn fat steadily</div>
        </div>

        <div class="metric-card water">
          <div class="metric-header">
            <span class="metric-title">Daily Water</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2" style="width:20px;height:20px;"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
          </div>
          <div class="metric-val">${u.nutrition.waterLiters} <span>Liters</span></div>
          <div class="metric-sub">About ${u.nutrition.waterGlasses} glasses daily (including buttermilk & tea)</div>
        </div>

        <div class="metric-card protein">
          <div class="metric-header">
            <span class="metric-title">Daily Protein</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2" style="width:20px;height:20px;"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
          </div>
          <div class="metric-val">${u.nutrition.proteinGrams}g <span>/ day</span></div>
          <div class="metric-sub">Keeps you full and preserves lean tone</div>
        </div>

        <div class="metric-card goal">
          <div class="metric-header">
            <span class="metric-title">Weight Goal</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" style="width:20px;height:20px;"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          </div>
          <div class="metric-val">${u.nutrition.weightDiff} <span>kg to lose</span></div>
          <div class="metric-sub">Reach ${u.targetWeight} kg with healthy portion control</div>
        </div>
      `;
    }

    renderWaterTracker();
  }

  // Render Water Tracker
  function renderWaterTracker() {
    if (!waterGlassesRow || !appState.user) return;
    const targetGlasses = appState.user.nutrition.waterGlasses || 10;
    const drank = appState.waterGlassesDrank || 0;

    let html = '';
    for (let i = 1; i <= targetGlasses; i++) {
      const isDrank = i <= drank;
      html += `
        <button class="water-glass-btn ${isDrank ? 'drank' : ''}" data-glass="${i}">
          <svg viewBox="0 0 24 24" fill="${isDrank ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
          </svg>
          Glass ${i}
        </button>
      `;
    }
    waterGlassesRow.innerHTML = html;

    if (waterProgressText) {
      const pct = Math.min(100, Math.round((drank / targetGlasses) * 100));
      waterProgressText.innerHTML = `<strong>${drank} of ${targetGlasses} glasses</strong> completed (${pct}%). Click glasses as you drink!`;
    }

    waterGlassesRow.querySelectorAll('.water-glass-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const glassNum = parseInt(this.getAttribute('data-glass'), 10);
        if (appState.waterGlassesDrank === glassNum) {
          appState.waterGlassesDrank = glassNum - 1;
        } else {
          appState.waterGlassesDrank = glassNum;
        }
        saveState();
        renderWaterTracker();
        if (appState.waterGlassesDrank === targetGlasses) {
          showToast("🎉 Great job! Full daily water goal completed!");
        }
      });
    });
  }

  // Render Day Tabs (Monday - Sunday)
  function renderDayTabs() {
    if (!daysTabNav || !appState.plan) return;
    let tabsHtml = '';

    appState.plan.forEach((day, idx) => {
      const isActive = appState.activeDayIndex === idx;
      tabsHtml += `
        <button class="tab-btn ${isActive ? 'active' : ''}" data-day="${idx}">
          <span>${day.dayName}</span>
          <span class="tab-sub">${day.totals.calories} kcal</span>
        </button>
      `;
    });

    daysTabNav.innerHTML = tabsHtml;

    daysTabNav.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        appState.activeDayIndex = parseInt(this.getAttribute('data-day'), 10);
        saveState();
        renderDayTabs();
        renderDayPlan();
      });
    });
  }

  // Clean Single Meal Block
  function createCleanMealBlock(dayIndex, mealKeyName, mealData, mealTitle, badgeClass) {
    const mealKey = `${dayIndex}-${mealKeyName}`;
    const isChecked = !!appState.checkedMeals[mealKey];

    return `
      <div class="meal-block ${isChecked ? 'checked' : ''}" id="block-${mealKey}">
        <div class="meal-image-col">
          <img src="${mealData.image}" alt="${mealData.name}" class="meal-img" loading="lazy">
          <span class="meal-badge-category">${mealData.category || mealTitle}</span>
        </div>

        <div class="meal-content-col">
          <div class="meal-top">
            <span class="meal-badge-time ${badgeClass}">${mealTitle}</span>
            <div class="meal-actions">
              <button class="btn-swap" data-day="${dayIndex}" data-meal="${mealKeyName}" title="Swap with another dish">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px;"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>
                Swap
              </button>
              <label class="meal-check-label">
                <input type="checkbox" class="meal-checkbox" data-key="${mealKey}" ${isChecked ? 'checked' : ''}>
                Eaten
              </label>
            </div>
          </div>

          <div>
            <h4 class="meal-name">${mealData.name}</h4>
            <p class="meal-desc">${mealData.desc}</p>
            ${mealData.portion ? `
              <div class="portion-box">
                <strong>Serving Portion:</strong> ${mealData.portion}
              </div>
            ` : ''}
          </div>

          <div class="meal-meta-row">
            <div class="meal-macros">
              <span><strong>${mealData.calories}</strong> kcal</span>
              <span><strong>${mealData.protein}g</strong> Protein</span>
              <span><strong>${mealData.carbs}g</strong> Carbs</span>
              <span><strong>${mealData.fat}g</strong> Fats</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Render Day Plan: Focused on Breakfast, Lunch (+ Salad), Dinner
  function renderDayPlan() {
    if (!dayPlanContainer || !appState.plan) return;
    const day = appState.plan[appState.activeDayIndex];
    const dayIdx = appState.activeDayIndex;
    const m = day.meals;
    const salad = m.salad;

    dayPlanContainer.innerHTML = `
      <div class="glass-panel day-plan-card">
        <div class="day-header">
          <div class="day-title-group">
            <h3>${day.dayName}'s Meals</h3>
            <p>Simple routine: High-protein breakfast, Kerala lunch with salad, and light dinner.</p>
          </div>
          <div class="day-cal-badge">
            Day Total: ${day.totals.calories} kcal • ${day.totals.protein}g Protein
          </div>
        </div>

        <!-- 3 Main Meals Timeline -->
        <div class="meals-timeline">
          <!-- 1. Breakfast -->
          ${createCleanMealBlock(dayIdx, 'breakfast', m.breakfast, 'Breakfast (8:30 AM)', 'time-breakfast')}

          <!-- 2. Lunch -->
          ${createCleanMealBlock(dayIdx, 'lunch', m.lunch, 'Kerala Lunch (1:15 PM)', 'time-lunch')}

          <!-- Salad Spotlight for Lunch & Dinner -->
          <div class="salad-spotlight-card">
            <div class="salad-image-col">
              <img src="${salad.image}" alt="${salad.name}" loading="lazy">
            </div>
            <div>
              <div class="salad-spotlight-header">
                🥗 Daily Fresh Salad (Have 10 mins before Lunch or Dinner)
              </div>
              <h4 class="salad-title">${salad.name}</h4>
              <div class="salad-ingredients-list">
                ${salad.ingredients.map(ing => `<span class="salad-ingredient-chip">${ing}</span>`).join('')}
              </div>
              <div class="salad-dressing">
                <strong>Dressing:</strong> ${salad.dressing} • <strong>Fiber:</strong> ${salad.fiber} (~${salad.calories} kcal)
              </div>
              <div class="salad-benefit">
                💡 <strong>Why this helps:</strong> ${salad.tip}
              </div>
            </div>
          </div>

          <!-- 3. Dinner -->
          ${createCleanMealBlock(dayIdx, 'dinner', m.dinner, 'Light Dinner (7:45 PM)', 'time-dinner')}
        </div>

        <!-- Optional Quick Snacks Banner -->
        <div class="quick-snacks-box">
          <div class="quick-snack-item">
            <span class="snack-time">🌅 Morning Sip:</span>
            <span>${m.morningDrink.name} (${m.morningDrink.calories} kcal)</span>
          </div>
          <div class="quick-snack-item">
            <span class="snack-time">☕ 4:30 PM Snack:</span>
            <span>${m.snack.name} (${m.snack.calories} kcal)</span>
          </div>
        </div>
      </div>
    `;

    attachMealEventListeners();
  }

  function attachMealEventListeners() {
    dayPlanContainer.querySelectorAll('.meal-checkbox').forEach(chk => {
      chk.addEventListener('change', function () {
        const key = this.getAttribute('data-key');
        if (this.checked) {
          appState.checkedMeals[key] = true;
          document.getElementById(`block-${key}`)?.classList.add('checked');
        } else {
          delete appState.checkedMeals[key];
          document.getElementById(`block-${key}`)?.classList.remove('checked');
        }
        saveState();
      });
    });

    dayPlanContainer.querySelectorAll('.btn-swap').forEach(btn => {
      btn.addEventListener('click', function () {
        const dIdx = parseInt(this.getAttribute('data-day'), 10);
        const mCat = this.getAttribute('data-meal');
        swapSingleMeal(dIdx, mCat);
      });
    });
  }

  // ==========================================================================
  // DEDICATED GROCERY & SHOPPING PURCHASES SECTION
  // ==========================================================================
  function renderGrocerySection() {
    initGroceryList();
    if (!groceryCategoriesGrid) return;

    let totalItems = 0;
    let checkedItems = 0;

    let html = '';
    appState.groceryList.forEach((cat, catIdx) => {
      html += `
        <div class="grocery-cat-card">
          <h4 class="grocery-cat-title">
            <span>${cat.icon}</span>
            <span>${cat.category}</span>
          </h4>
          <ul class="grocery-items-list">
            ${cat.items.map((item, itemIdx) => {
              totalItems++;
              if (item.checked) checkedItems++;
              return `
                <li class="grocery-item-row ${item.checked ? 'purchased' : ''}">
                  <label class="grocery-label">
                    <input type="checkbox" data-cat="${catIdx}" data-item="${itemIdx}" ${item.checked ? 'checked' : ''}>
                    <span>${item.name}</span>
                  </label>
                  <span class="grocery-qty-badge">${item.qty}</span>
                </li>
              `;
            }).join('')}
          </ul>
        </div>
      `;
    });

    if (appState.customGroceryItems && appState.customGroceryItems.length > 0) {
      html += `
        <div class="grocery-cat-card" style="border-color: rgba(244, 63, 94, 0.4);">
          <h4 class="grocery-cat-title" style="color:#fb7185;">
            <span>⭐</span>
            <span>Your Added Items</span>
          </h4>
          <ul class="grocery-items-list">
            ${appState.customGroceryItems.map((cItem, cIdx) => {
              totalItems++;
              if (cItem.checked) checkedItems++;
              return `
                <li class="grocery-item-row ${cItem.checked ? 'purchased' : ''}">
                  <label class="grocery-label">
                    <input type="checkbox" data-custom="${cIdx}" ${cItem.checked ? 'checked' : ''}>
                    <span>${cItem.name}</span>
                  </label>
                  <button type="button" class="btn-remove-custom" data-remove="${cIdx}" style="background:none; border:none; color:#f43f5e; cursor:pointer; font-size:1.1rem; padding:0 6px;">&times;</button>
                </li>
              `;
            }).join('')}
          </ul>
        </div>
      `;
    }

    groceryCategoriesGrid.innerHTML = html;

    const pct = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;
    if (groceryProgressInfo) {
      groceryProgressInfo.innerHTML = `
        <span>Shopping Progress: <strong>${checkedItems} of ${totalItems} items purchased</strong></span>
        <span>${pct}% completed</span>
      `;
    }
    if (groceryProgressFill) {
      groceryProgressFill.style.width = `${pct}%`;
    }

    groceryCategoriesGrid.querySelectorAll('input[type="checkbox"]').forEach(chk => {
      chk.addEventListener('change', function () {
        if (this.hasAttribute('data-custom')) {
          const cIdx = parseInt(this.getAttribute('data-custom'), 10);
          appState.customGroceryItems[cIdx].checked = this.checked;
        } else {
          const catIdx = parseInt(this.getAttribute('data-cat'), 10);
          const itemIdx = parseInt(this.getAttribute('data-item'), 10);
          appState.groceryList[catIdx].items[itemIdx].checked = this.checked;
        }
        saveState();
        renderGrocerySection();
      });
    });

    groceryCategoriesGrid.querySelectorAll('.btn-remove-custom').forEach(btn => {
      btn.addEventListener('click', function () {
        const cIdx = parseInt(this.getAttribute('data-remove'), 10);
        appState.customGroceryItems.splice(cIdx, 1);
        saveState();
        renderGrocerySection();
        showToast("Removed custom item.");
      });
    });
  }

  function addCustomGroceryItem() {
    if (!customItemInput) return;
    const val = customItemInput.value.trim();
    if (!val) return;

    if (!appState.customGroceryItems) appState.customGroceryItems = [];
    appState.customGroceryItems.push({ name: val, checked: false });
    customItemInput.value = '';
    saveState();
    renderGrocerySection();
    showToast(`Added "${val}" to grocery list!`);
  }

  function clearAllCheckedGrocery() {
    initGroceryList();
    appState.groceryList.forEach(cat => {
      cat.items.forEach(item => item.checked = false);
    });
    if (appState.customGroceryItems) {
      appState.customGroceryItems.forEach(item => item.checked = false);
    }
    saveState();
    renderGrocerySection();
    showToast("Cleared checked items.");
  }

  function copyGroceryListToClipboard() {
    initGroceryList();
    let text = "🛒 7-DAY FAT LOSS GROCERY SHOPPING LIST:\n\n";
    appState.groceryList.forEach(cat => {
      text += `📍 ${cat.category.toUpperCase()}:\n`;
      cat.items.forEach(i => {
        text += `  [${i.checked ? 'X' : ' '}] ${i.name} (${i.qty})\n`;
      });
      text += "\n";
    });

    if (appState.customGroceryItems && appState.customGroceryItems.length > 0) {
      text += "📍 CUSTOM PURCHASES:\n";
      appState.customGroceryItems.forEach(i => {
        text += `  [${i.checked ? 'X' : ' '}] ${i.name}\n`;
      });
      text += "\n";
    }

    navigator.clipboard.writeText(text).then(() => {
      showToast("✅ Shopping list copied to clipboard!");
    }).catch(() => {
      showToast("List copied!");
    });
  }

  function copyEntirePlan() {
    if (!appState.plan || !appState.user) return;
    const u = appState.user;
    let t = `🥗 7-DAY FAT LOSS DIET PLAN\n`;
    t += `Target Calories: ${u.nutrition.targetCalories} kcal/day | Protein: ${u.nutrition.proteinGrams}g | Water: ${u.nutrition.waterLiters}L\n\n`;

    appState.plan.forEach((day, idx) => {
      t += `============================\n`;
      t += `DAY ${idx + 1}: ${day.dayName.toUpperCase()}\n`;
      t += `Target: ${day.totals.calories} kcal | ${day.totals.protein}g Protein\n`;
      t += `----------------------------\n`;
      t += `🍳 Breakfast: ${day.meals.breakfast.name} (${day.meals.breakfast.portion})\n`;
      t += `🍛 Kerala Lunch: ${day.meals.lunch.name} (${day.meals.lunch.portion})\n`;
      t += `🥗 Daily Salad: ${day.meals.salad.name}\n`;
      t += `🍲 Light Dinner: ${day.meals.dinner.name} (${day.meals.dinner.portion})\n`;
      t += `☕ Snack: ${day.meals.snack.name}\n\n`;
    });

    navigator.clipboard.writeText(t).then(() => {
      showToast("📋 7-Day Plan copied to clipboard!");
    }).catch(() => {
      showToast("Plan copied!");
    });
  }

  function renderTipsSection() {
    const container = document.getElementById('rulesGrid');
    if (!container) return;

    let html = '';
    KERALA_DIET_DATABASE.fatLossTips.forEach(tip => {
      html += `
        <div class="rule-card">
          <h4>${tip.title}</h4>
          <p>${tip.text}</p>
        </div>
      `;
    });
    container.innerHTML = html;
  }

  function onFormSubmit(e) {
    if (e) e.preventDefault();

    const gender = document.querySelector('input[name="gender"]:checked')?.value || 'female';
    const age = parseInt(document.getElementById('ageInput').value, 10) || 29;
    const height = parseFloat(document.getElementById('heightInput').value) || 164;
    const weight = parseFloat(document.getElementById('weightInput').value) || 72;
    const targetWeight = parseFloat(document.getElementById('targetWeightInput').value) || 64;
    const activity = document.querySelector('input[name="activity"]:checked')?.value || 'sedentary';
    const diet = document.querySelector('input[name="diet"]:checked')?.value || 'non-veg';

    if (weight <= 35 || weight > 250) {
      alert("Please enter a valid weight between 35 kg and 250 kg.");
      return;
    }
    if (height <= 100 || height > 250) {
      alert("Please enter a valid height between 100 cm and 250 cm.");
      return;
    }
    if (age < 14 || age > 100) {
      alert("Please enter an age between 14 and 100.");
      return;
    }

    const formData = { gender, age, height, weight, targetWeight, activity, diet };
    const nutrition = calculateNutritionProfile(formData);

    appState.user = {
      ...formData,
      nutrition
    };

    appState.plan = generate7DayPlan(appState.user);
    appState.activeDayIndex = 0;
    appState.waterGlassesDrank = 0;
    appState.checkedMeals = {};

    saveState();
    renderAll();

    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
    showToast("✨ Your 7-Day Diet Plan is ready!");
  }

  function loadSampleProfile() {
    document.querySelector('input[name="gender"][value="female"]').checked = true;
    document.getElementById('ageInput').value = 30;
    document.getElementById('heightInput').value = 163;
    document.getElementById('weightInput').value = 71;
    document.getElementById('targetWeightInput').value = 63;
    document.querySelector('input[name="activity"][value="light"]').checked = true;
    document.querySelector('input[name="diet"][value="non-veg"]').checked = true;

    showToast("Sample profile loaded! Generating plan...");
    setTimeout(() => {
      onFormSubmit();
    }, 200);
  }

  function onRegeneratePlanClick() {
    if (!appState.user) return;
    appState.plan = generate7DayPlan(appState.user);
    saveState();
    renderDayPlan();
    renderDayTabs();
    showToast("🔄 New meals generated for the week!");
  }

  function onEditProfileClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const firstInput = document.getElementById('ageInput');
    if (firstInput) firstInput.focus();
    showToast("Adjust your details and click 'Generate My Diet Plan'.");
  }

  function renderAll() {
    renderSummaryDashboard();
    renderDayTabs();
    renderDayPlan();
    renderGrocerySection();
    renderTipsSection();
  }

  function init() {
    if (dietForm) dietForm.addEventListener('submit', onFormSubmit);
    if (btnSample) btnSample.addEventListener('click', loadSampleProfile);
    if (btnRegenerate) btnRegenerate.addEventListener('click', onRegeneratePlanClick);
    if (btnEditProfile) btnEditProfile.addEventListener('click', onEditProfileClick);
    if (btnPrintPlan) btnPrintPlan.addEventListener('click', () => window.print());
    if (btnCopyPlan) btnCopyPlan.addEventListener('click', copyEntirePlan);

    // Grocery actions
    if (btnAddCustomItem) btnAddCustomItem.addEventListener('click', addCustomGroceryItem);
    if (customItemInput) {
      customItemInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          addCustomGroceryItem();
        }
      });
    }
    if (btnCopyGrocery) btnCopyGrocery.addEventListener('click', copyGroceryListToClipboard);
    if (btnPrintGrocery) btnPrintGrocery.addEventListener('click', () => window.print());
    if (btnClearCheckedGrocery) btnClearCheckedGrocery.addEventListener('click', clearAllCheckedGrocery);

    renderTipsSection();
    loadPersistedState();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
