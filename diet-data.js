/**
 * Fatloss Diet Database - Kerala Meals, English Breakfasts & Fresh Salads
 * English only (no Malayalam script). Calibrated for fat loss, satiety, and high protein.
 */

const KERALA_DIET_DATABASE = {
  // Morning Boost
  morningBoosts: [
    {
      name: "Warm Cumin Water (Jeera Vellam) & Soaked Almonds",
      desc: "1 glass warm cumin-infused water + 4 soaked peeled almonds.",
      image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=600&auto=format&fit=crop&q=80",
      calories: 35,
      protein: 1.2,
      carbs: 1.5,
      fat: 2.8,
      benefits: "Aids digestion, boosts morning resting metabolism, helps insulin balance."
    },
    {
      name: "Fenugreek (Methi) Infusion & Walnuts",
      desc: "1 glass warm fenugreek-infused water + 2 walnut halves.",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80",
      calories: 40,
      protein: 1.4,
      carbs: 1.8,
      fat: 3.2,
      benefits: "Slows carb absorption and curbs morning cravings."
    },
    {
      name: "Traditional Herbal Pink Water (Pathimugam) with Fresh Lemon",
      desc: "1 glass warm Pathimugam (sappan wood infusion) with a squeeze of fresh lemon.",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80",
      calories: 8,
      protein: 0.2,
      carbs: 1.8,
      fat: 0.1,
      benefits: "Rich in antioxidants, natural body coolant and digestive cleanser."
    },
    {
      name: "Warm Ginger-Tulsi Brew with Chia Seeds",
      desc: "1 glass warm ginger and holy basil brew with 1 tsp soaked chia seeds.",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80",
      calories: 25,
      protein: 0.8,
      carbs: 2.2,
      fat: 1.4,
      benefits: "Soothes gut inflammation and provides soluble morning fiber."
    }
  ],

  // Breakfast items: Curated mix of English Classics & Kerala Power Breakfasts
  breakfasts: {
    all: [
      // English Breakfasts
      {
        id: "b_english_scramble_toast",
        name: "English Scrambled Eggs with Grilled Tomatoes & Multigrain Toast",
        category: "English Breakfast",
        desc: "2 fluffy scrambled eggs cooked with a splash of milk and black pepper, served with herb-grilled tomato halves and 1 slice toasted multigrain sourdough bread.",
        portion: "2 eggs scramble + 1 slice multigrain toast + 2 grilled tomato halves",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&auto=format&fit=crop&q=80",
        calories: 295,
        protein: 18,
        carbs: 22,
        fat: 12,
        type: ["non-veg", "pescatarian", "eggetarian"],
        tags: ["High Protein", "English Classic"]
      },
      {
        id: "b_english_oats_berries",
        name: "Rolled Oats Porridge with Cinnamon, Sliced Apple & Chia Seeds",
        category: "English Breakfast",
        desc: "Warm rolled oats cooked in water or skim milk, spiced with Ceylon cinnamon, topped with fresh crisp apple slices, 4 crushed almonds, and soaked chia seeds.",
        portion: "1 large bowl (45g dry rolled oats + 150ml milk/water + toppings)",
        image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=600&auto=format&fit=crop&q=80",
        calories: 280,
        protein: 9,
        carbs: 48,
        fat: 5,
        type: ["veg", "eggetarian", "pescatarian", "non-veg"],
        tags: ["High Fiber", "Sustained Energy"]
      },
      {
        id: "b_english_poached_spinach",
        name: "Poached Eggs on Sautéed Garlic Spinach & Whole Grain Toast",
        category: "English Breakfast",
        desc: "2 soft poached eggs served over warm baby spinach sautéed with a touch of garlic and olive oil on 1 slice toasted artisan whole wheat bread.",
        portion: "2 poached eggs + 1 cup sautéed spinach + 1 toast",
        image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&auto=format&fit=crop&q=80",
        calories: 285,
        protein: 17,
        carbs: 20,
        fat: 11,
        type: ["non-veg", "pescatarian", "eggetarian"],
        tags: ["Nutrient Dense", "English Classic"]
      },
      {
        id: "b_english_eggwhite_omelette",
        name: "Mushroom, Bell Pepper & Spinach Omelette with Brown Toast",
        category: "English Breakfast",
        desc: "Fluffy 3-egg omelette (1 whole egg + 2 whites) loaded with sliced button mushrooms, colorful diced bell peppers, and fresh herbs, served with 1 brown toast.",
        portion: "3-egg loaded omelette + 1 brown toast",
        image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=600&auto=format&fit=crop&q=80",
        calories: 270,
        protein: 21,
        carbs: 22,
        fat: 8.5,
        type: ["non-veg", "pescatarian", "eggetarian"],
        tags: ["Ultra High Protein", "Lean & Green"]
      },
      {
        id: "b_english_greek_yogurt_bowl",
        name: "High-Protein Greek Yogurt Parfait with Pomegranate & Walnuts",
        category: "English Breakfast",
        desc: "Thick unsweetened Greek yogurt layered with juicy pomegranate pearls, fresh sliced strawberries, 1 tsp flaxseeds, and crushed walnuts.",
        portion: "180g Greek yogurt + 1/2 cup fruit + 1 tbsp mixed seeds & nuts",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&auto=format&fit=crop&q=80",
        calories: 260,
        protein: 19,
        carbs: 24,
        fat: 7,
        type: ["veg", "eggetarian", "pescatarian", "non-veg"],
        tags: ["Probiotic", "Quick & Refreshing"]
      },

      // Kerala Breakfasts
      {
        id: "b_kerala_oats_puttu",
        name: "Steamed Oats Puttu with Green Gram (Cherupayar) Curry",
        category: "Kerala Breakfast",
        desc: "Steamed roasted oats puttu layered with just 1 tbsp fresh grated coconut, served with boiled green gram curry seasoned with cumin and curry leaves.",
        portion: "1 small cylinder puttu + 1 katori green gram curry (150g)",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80",
        calories: 290,
        protein: 11,
        carbs: 48,
        fat: 4.5,
        type: ["veg", "eggetarian", "pescatarian", "non-veg"],
        tags: ["High Fiber", "Kerala Staple"]
      },
      {
        id: "b_kerala_idiyappam_egg",
        name: "Whole Wheat Idiyappam with Kerala Style Egg Roast",
        category: "Kerala Breakfast",
        desc: "Steamed whole wheat string hoppers paired with a flavorful Kerala onion-tomato egg roast made with shallots, curry leaves, and minimal coconut oil.",
        portion: "2 medium idiyappam + 1 whole egg + 1 boiled egg white in roast gravy",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80",
        calories: 320,
        protein: 16,
        carbs: 42,
        fat: 8.5,
        type: ["eggetarian", "pescatarian", "non-veg"],
        tags: ["Kerala Classic", "High Protein"]
      },
      {
        id: "b_kerala_idiyappam_kadala",
        name: "Whole Wheat Idiyappam with Black Chickpea (Kadala) Curry",
        category: "Kerala Breakfast",
        desc: "2 steamed whole wheat idiyappam served with traditional slow-simmered black chickpea curry flavored with roasted coriander, shallots, and aromatic spices.",
        portion: "2 idiyappam + 1 bowl kadala curry (160g)",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80",
        calories: 310,
        protein: 12,
        carbs: 52,
        fat: 5,
        type: ["veg", "eggetarian", "pescatarian", "non-veg"],
        tags: ["Rich Fiber", "Plant Protein"]
      },
      {
        id: "b_kerala_ragi_dosa",
        name: "Crispy Ragi Dosa with Roasted Tomato-Shallot Chammanthi",
        category: "Kerala Breakfast",
        desc: "Nutrient-dense finger millet (ragi) and lentil crepes served with a zesty, no-coconut shallot and tomato dip tempered with mustard seeds.",
        portion: "2 medium ragi dosas + 3 tbsp spicy tomato shallot chutney",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=80",
        calories: 270,
        protein: 8,
        carbs: 47,
        fat: 4,
        type: ["veg", "eggetarian", "pescatarian", "non-veg"],
        tags: ["Iron Rich", "Low GI"]
      },
      {
        id: "b_kerala_appam_stew",
        name: "Lacy Fermented Appam with Mild Kerala Vegetable Stew",
        category: "Kerala Breakfast",
        desc: "Crisp-edged, soft-centered fermented rice appam paired with a fragrant vegetable stew cooked in light coconut milk with carrots, French beans, and ginger.",
        portion: "2 appams + 1 bowl mixed vegetable stew",
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80",
        calories: 285,
        protein: 7,
        carbs: 49,
        fat: 6,
        type: ["veg", "eggetarian", "pescatarian", "non-veg"],
        tags: ["Gut Friendly", "Comfort Food"]
      }
    ]
  },

  // Mid-Morning Refreshment
  midMorningSnacks: [
    {
      name: "Kerala Spiced Buttermilk (Sambharam)",
      desc: "Chilled fresh churned low-fat buttermilk infused with crushed shallots, green chili, ginger, and bruised curry leaves.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=80",
      calories: 45,
      protein: 3.2,
      carbs: 4.5,
      fat: 1.2,
      benefits: "Natural probiotic, cools digestion, satisfies mid-morning hunger with zero added sugar."
    },
    {
      name: "Fresh Tender Coconut Water with Sliced Cucumber Batons",
      desc: "1 glass chilled tender coconut water paired with crunchy cucumber sticks sprinkled with rock salt.",
      image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=600&auto=format&fit=crop&q=80",
      calories: 50,
      protein: 1.5,
      carbs: 10,
      fat: 0.3,
      benefits: "Packed with potassium and magnesium to restore cellular hydration."
    },
    {
      name: "Antioxidant Green Tea with Mint & Lemon",
      desc: "Freshly brewed green tea leaves with fresh mint leaves and a squeeze of fresh lemon juice.",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80",
      calories: 5,
      protein: 0.2,
      carbs: 1,
      fat: 0,
      benefits: "EGCG catechins that stimulate natural thermogenesis and fat oxidation."
    }
  ],

  // Kerala Lunches (Portioned Red Matta Rice + Clean Protein + Vegetable Thoran + Mandatory Fresh Salad)
  lunches: {
    nonVeg: [
      {
        id: "l_matta_sardine_curry",
        name: "Kerala Matta Rice with Malabar Sardine (Mathi) Kudampuli Curry",
        desc: "Steamed Kerala Red Matta (Chemba) rice served with fresh sardines slow-cooked in a clay pot with Malabar tamarind (kudampuli), shallots, ginger, and curry leaves (no coconut milk), with crunchy Cabbage Thoran and a large salad.",
        portion: "1 cup cooked Matta rice (130g) + 2 pieces Mathi curry + 1 cup Cabbage Thoran + Crisp Salad",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
        calories: 440,
        protein: 28,
        carbs: 56,
        fat: 10,
        saladName: "Kerala Lemon Kachumber Salad",
        saladDesc: "Crisp cucumber, diced carrot, shallots, lemon juice, pink salt, and fresh coriander.",
        type: ["non-veg", "pescatarian"]
      },
      {
        id: "l_matta_mackerel_pollichathu",
        name: "Red Rice with Tawa Seared Mackerel (Ayala) & Snake Gourd Thoran",
        desc: "Portion-controlled Matta rice paired with 1 whole fresh mackerel marinated in turmeric, lime, and crushed chili and pan-seared with minimal oil, tender Snake Gourd (Padavalanga) thoran, and fresh Beetroot salad.",
        portion: "1 cup Matta rice (130g) + 1 piece Ayala + 1 cup Padavalanga Thoran + Warm Rasam + Salad",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=80",
        calories: 460,
        protein: 30,
        carbs: 54,
        fat: 12,
        saladName: "Grated Beetroot & Mint Lime Salad",
        saladDesc: "Grated raw sweet beetroot, mint leaves, roasted cumin powder, and lemon zest.",
        type: ["non-veg", "pescatarian"]
      },
      {
        id: "l_matta_chicken_pepper",
        name: "Matta Rice with Nadan Pepper Chicken Breast & Green Beans Thoran",
        desc: "Steamed red rice served with lean skinless chicken breast braised in caramelized shallots, garlic, and fresh crushed Tellicherry black pepper, crunchy French beans thoran, and Sprouted Moong salad.",
        portion: "1 cup cooked rice + 140g chicken breast curry + 1 cup Beans thoran + Salad",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&auto=format&fit=crop&q=80",
        calories: 450,
        protein: 34,
        carbs: 52,
        fat: 9,
        saladName: "Sprouted Green Gram & Raw Mango Chaat",
        saladDesc: "Sprouted green gram, crunchy raw mango cubes, pink salt, shallots, and green chili.",
        type: ["non-veg"]
      },
      {
        id: "l_matta_egg_avial",
        name: "Kerala Rice with Boiled Egg Roast, Mixed Veg Avial & Moru Curry",
        desc: "Steamed red rice served with 2 eggs (1 whole + 1 white) in light onion roast gravy, traditional mixed vegetable Avial (with light curd and measured coconut), and Raw Papaya salad.",
        portion: "1 cup rice + 2 eggs in roast + 1 cup Avial + Moru gravy + Salad",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80",
        calories: 435,
        protein: 22,
        carbs: 58,
        fat: 11,
        saladName: "Raw Papaya & Carrot Ribbon Slaw",
        saladDesc: "Ribboned raw papaya and carrot tossed with green chili, lime juice, and sesame seeds.",
        type: ["non-veg", "pescatarian", "eggetarian"]
      },
      {
        id: "l_matta_seer_fish",
        name: "Matta Rice with Light Seer Fish (Neymeen) Curry & Ivy Gourd Stir-Fry",
        desc: "Steamed Chemba rice with fresh seer fish cooked with ginger, green chilies, and light coconut milk, accompanied by crunchy Kovakka (ivy gourd) mezhukkupuratti and Cabbage Pomegranate salad.",
        portion: "1 cup rice + 1 piece Neymeen + 1 cup Kovakka + Salad",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80",
        calories: 455,
        protein: 29,
        carbs: 53,
        fat: 11,
        saladName: "Crisp Cabbage & Pomegranate Salad",
        saladDesc: "Shredded cabbage, juicy pomegranate pearls, fresh cilantro, and lemon dressing.",
        type: ["non-veg", "pescatarian"]
      }
    ],
    vegetarian: [
      {
        id: "l_veg_cherupayar_kovakka",
        name: "Matta Rice with Whole Green Gram Curry, Kovakka & Moru",
        desc: "Steamed red rice served with protein-rich green gram curry tempered with roasted cumin, crunchy Ivy Gourd (Kovakka) stir-fry, soothing spiced moru curry, and Sprouted Moong salad.",
        portion: "1 cup cooked Matta rice (130g) + 1 large bowl cherupayar (160g) + 1 cup Kovakka + Salad",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
        calories: 410,
        protein: 18,
        carbs: 68,
        fat: 6,
        saladName: "Sprouted Green Gram & Raw Mango Chaat",
        saladDesc: "Sprouted green gram, crunchy raw mango cubes, pink salt, shallots, and green chili.",
        type: ["veg", "eggetarian", "pescatarian", "non-veg"]
      },
      {
        id: "l_veg_parippu_avial",
        name: "Matta Rice with Yellow Moong Dal (Parippu), Light Avial & Rasam",
        desc: "Steamed Chemba rice with roasted yellow moong dal tempered with curry leaves and 1/2 tsp ghee, low-coconut vegetable Avial, piping hot pepper rasam, and Kerala Cucumber Kachumber.",
        portion: "1 cup rice + 1 bowl dal + 1 cup Avial + 1 cup Rasam + Salad",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop&q=80",
        calories: 395,
        protein: 16,
        carbs: 65,
        fat: 7,
        saladName: "Kerala Lemon Kachumber Salad",
        saladDesc: "Crisp cucumber, diced carrot, shallots, lemon juice, pink salt, and fresh coriander.",
        type: ["veg", "eggetarian", "pescatarian", "non-veg"]
      },
      {
        id: "l_veg_kadala_cheera",
        name: "Matta Rice with Nadan Black Chickpea Curry & Red Spinach Thoran",
        desc: "Steamed red rice with aromatic black chickpeas simmered in roasted spice gravy, iron-packed red spinach (cheera) thoran, chilled buttermilk, and Boiled Chickpea-Tomato salad.",
        portion: "1 cup rice + 1 large bowl Kadala curry + 1 cup Cheera thoran + Salad",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80",
        calories: 425,
        protein: 19,
        carbs: 69,
        fat: 7.5,
        saladName: "Boiled Chickpea & Tomato Herb Salad",
        saladDesc: "Boiled black chickpeas, diced plum tomatoes, cucumber, coriander, and chatpata lemon dressing.",
        type: ["veg", "eggetarian", "pescatarian", "non-veg"]
      },
      {
        id: "l_veg_paneer_pepper_roast",
        name: "Matta Rice with Pan-Seared Low-Fat Paneer Pepper Roast & Thoran",
        desc: "Steamed red rice served with lean paneer or firm tofu cubes sautéed with crushed shallots, black pepper, and curry leaves, alongside Cabbage Thoran and fresh Beetroot salad.",
        portion: "1 cup rice + 120g paneer roast + 1 cup cabbage thoran + Salad",
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&auto=format&fit=crop&q=80",
        calories: 445,
        protein: 23,
        carbs: 54,
        fat: 13,
        saladName: "Grated Beetroot & Mint Lime Salad",
        saladDesc: "Grated raw sweet beetroot, mint leaves, roasted cumin powder, and lemon zest.",
        type: ["veg", "eggetarian", "pescatarian", "non-veg"]
      },
      {
        id: "l_veg_soya_beans",
        name: "Matta Rice with Spiced Soya Chunks Curry & Green Beans Thoran",
        desc: "Portion-controlled red rice served with high-protein soya chunks cooked in Kerala spices, crunchy French beans thoran, and crisp Cabbage Slaw.",
        portion: "1 cup rice + 1 cup soya chunks curry + 1 cup Beans thoran + Salad",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
        calories: 420,
        protein: 25,
        carbs: 58,
        fat: 8,
        saladName: "Crisp Cabbage & Pomegranate Salad",
        saladDesc: "Shredded cabbage, juicy pomegranate pearls, fresh cilantro, and lemon dressing.",
        type: ["veg", "eggetarian", "pescatarian", "non-veg"]
      }
    ]
  },

  // Evening Snacks
  eveningSnacks: [
    {
      name: "Warm Boiled Green Gram Sundal & Black Coffee",
      desc: "Warm boiled green gram lightly tempered with mustard seeds, green chilies, and a pinch of coconut, paired with unsweetened black coffee or dry ginger coffee.",
      portion: "1 small cup (100g) + 1 cup black coffee",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
      calories: 140,
      protein: 8,
      carbs: 22,
      fat: 1.5,
      benefits: "High satiety and clean plant protein to prevent evening binging."
    },
    {
      name: "Crispy Roasted Makhana (Fox Nuts) & Spiced Tea",
      desc: "Dry-roasted crunchy lotus seeds tossed with turmeric, sea salt, and black pepper, served with fragrant cardamom black tea without sugar.",
      portion: "1 large bowl (30g) + 1 cup spiced tea",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80",
      calories: 110,
      protein: 3,
      carbs: 20,
      fat: 1.2,
      benefits: "Low-calorie crunch, zero trans fat, helps curb salt cravings."
    },
    {
      name: "2 Hard-Boiled Egg Whites with Pepper & Green Tea",
      desc: "2 hard-boiled egg whites seasoned with freshly cracked black pepper and Himalayan pink salt, paired with warm green tea.",
      portion: "2 egg whites + 1 cup green tea",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&auto=format&fit=crop&q=80",
      calories: 40,
      protein: 8,
      carbs: 0.5,
      fat: 0.2,
      benefits: "Pure clean protein with zero cholesterol and minimal calories."
    },
    {
      name: "Roasted Bengal Gram (Chana) with Chilled Buttermilk",
      desc: "Handful of crunchy roasted black chickpeas with a glass of chilled spiced buttermilk.",
      portion: "35g roasted chana + 1 glass buttermilk",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=80",
      calories: 155,
      protein: 9,
      carbs: 22,
      fat: 2.5,
      benefits: "Slow-digesting complex carbs with sustained energy release."
    }
  ],

  // Light Dinners (Lower Carb, High Fiber & Protein, Easy Digestion)
  dinners: {
    all: [
      {
        id: "d_fish_pollichathu_salad",
        name: "Banana Leaf Pan-Grilled Fish (Meen Pollichathu) & Warm Veggie Salad",
        desc: "Fresh fish fillet wrapped in banana leaf with spicy shallot, tomato, and Malabar tamarind marinade, gently pan-grilled, served with warm steamed carrots, green beans, and cucumber batons.",
        portion: "150g fish fillet + 1 large bowl salad + warm clear broth",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=80",
        calories: 310,
        protein: 32,
        carbs: 14,
        fat: 11,
        saladName: "Warm Tossed Cucumber & Bell Pepper Salad",
        saladDesc: "Lightly tossed cucumber batons, colored peppers, crushed pepper, and lemon.",
        type: ["non-veg", "pescatarian"]
      },
      {
        id: "d_wheat_dosa_egg_bhurji",
        name: "Whole Wheat Dosa with Kerala Egg Bhurji & Fresh Rasam",
        desc: "1 thin whole wheat or oats dosa served with Kerala-style egg scramble (1 whole egg + 1 white cooked with shallots, curry leaves, and ginger) and a cup of warm pepper rasam.",
        portion: "1 dosa + 2 eggs scramble + 1 cup rasam + sliced cucumbers",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80",
        calories: 320,
        protein: 17,
        carbs: 32,
        fat: 12,
        saladName: "Chilled Sliced Cucumber & Tomato Salad",
        saladDesc: "Chilled fresh cucumbers and vine tomatoes with pink salt and fresh lime.",
        type: ["non-veg", "pescatarian", "eggetarian"]
      },
      {
        id: "d_grilled_chicken_salad",
        name: "Kerala Tawa Pepper Chicken Breast with Loaded Garden Salad",
        desc: "Skinless chicken breast marinated in yogurt, ginger-garlic, turmeric, and cracked black pepper, pan-seared with 1 tsp oil, served over a colorful bed of cabbage, carrot, cucumber, and roasted seeds.",
        portion: "160g chicken breast + 2 cups crunchy loaded salad",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
        calories: 330,
        protein: 38,
        carbs: 12,
        fat: 10,
        saladName: "Kerala Garden Rainbow Salad",
        saladDesc: "Shredded red cabbage, grated carrot, diced cucumber, fresh shallots, and lemon-coriander dressing.",
        type: ["non-veg"]
      },
      {
        id: "d_oats_vegetable_soup",
        name: "Kerala Spiced Oats & Vegetable Broth with Boiled Eggs/Paneer",
        desc: "Comforting warm rolled oats broth infused with garlic, cumin, ginger, shallots, carrots, beans, and green peas, topped with 2 boiled egg whites or 50g pan-seared paneer cubes.",
        portion: "1 large bowl soup (350ml) + protein topping",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format&fit=crop&q=80",
        calories: 275,
        protein: 14,
        carbs: 38,
        fat: 5.5,
        saladName: "Crispy Radish & Cucumber Salad",
        saladDesc: "Thinly sliced white radish, cucumber, lemon juice, and a touch of black salt.",
        type: ["veg", "eggetarian", "pescatarian", "non-veg"]
      },
      {
        id: "d_wheat_idiyappam_cherupayar",
        name: "Whole Wheat Idiyappam (2) with Green Gram Curry & Big Salad",
        desc: "Light and easy to digest: 2 steamed whole wheat idiyappam served with mildly spiced green gram curry and a large plate of crisp salad.",
        portion: "2 idiyappam + 1 bowl green gram curry (150g) + big salad",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80",
        calories: 310,
        protein: 13,
        carbs: 52,
        fat: 4,
        saladName: "Lemon Kachumber with Mint",
        saladDesc: "Finely chopped cucumber, tomatoes, shallots, fresh mint leaves, and lime juice.",
        type: ["veg", "eggetarian", "pescatarian", "non-veg"]
      },
      {
        id: "d_paneer_tofu_stirfry",
        name: "Kerala Spiced Paneer / Tofu Stir-Fry with Steamed Veggies",
        desc: "Low-fat paneer or firm tofu sautéed with onions, green chilies, curry leaves, and garam masala, served with steamed florets of cauliflower, beans, and fresh salad.",
        portion: "140g paneer/tofu + 1.5 cups steamed vegetables & salad",
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&auto=format&fit=crop&q=80",
        calories: 315,
        protein: 24,
        carbs: 16,
        fat: 14,
        saladName: "Spiced Beetroot & Cucumber Slaw",
        saladDesc: "Grated beetroot, chopped cucumber, lemon juice, and roasted cumin powder.",
        type: ["veg", "eggetarian", "pescatarian", "non-veg"]
      },
      {
        id: "d_soya_vegetable_stew",
        name: "Whole Wheat Appam (1) with High-Protein Soya Chunk Stew",
        desc: "1 soft fermented appam paired with aromatic light coconut milk stew simmered with textured soya chunks, green peas, carrots, and whole spices.",
        portion: "1 appam + 1 big bowl soya stew (250g) + fresh cucumber batons",
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80",
        calories: 300,
        protein: 21,
        carbs: 36,
        fat: 6,
        saladName: "Kerala Lemon Kachumber Salad",
        saladDesc: "Crisp cucumber, diced carrot, shallots, green chili, cilantro, and freshly squeezed lemon juice.",
        type: ["veg", "eggetarian", "pescatarian", "non-veg"]
      }
    ]
  },

  // Bedtime Calm
  bedtimeDrinks: [
    {
      name: "Warm Golden Turmeric & Cinnamon Milk",
      desc: "1/2 cup warm skim milk or almond milk whisked with pure turmeric powder, a pinch of black pepper, and cinnamon.",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
      calories: 45,
      protein: 3,
      carbs: 4.5,
      fat: 1.2,
      benefits: "Promotes deep restorative sleep, fights inflammation, and supports nighttime recovery."
    },
    {
      name: "Warm Cumin & Carom Seed (Ajwain) Tea",
      desc: "Warm herbal infusion of crushed cumin seeds and carom seeds.",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80",
      calories: 5,
      protein: 0.1,
      carbs: 1,
      fat: 0,
      benefits: "Relieves abdominal bloating and relaxes the digestive system before rest."
    }
  ],

  // Dedicated 7 Kerala Salads
  salads: [
    {
      id: "salad_kachumber",
      name: "Traditional Kerala Kachumber Salad",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80",
      ingredients: ["1 cup diced country cucumber", "1/2 cup finely diced carrots", "3 finely sliced shallots", "1 green chili deseeded", "Fresh coriander", "Juice of 1/2 lemon", "Pink Himalayan salt & black pepper"],
      dressing: "Fresh lemon juice + 1/4 tsp crushed roasted cumin powder",
      calories: 45,
      fiber: "2.8g",
      tip: "Shallots contain quercetin, a natural anti-inflammatory that helps regulate fat storage."
    },
    {
      id: "salad_cherupayar_sprout",
      name: "Sprouted Green Gram & Raw Mango Chaat",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80",
      ingredients: ["1/2 cup fresh sprouted green gram", "1/4 cup diced tangy raw mango", "1/4 cup diced cucumber", "2 chopped shallots", "Fresh curry leaves torn", "Lemon juice"],
      dressing: "Rock salt, lemon juice, and a pinch of roasted cumin powder",
      calories: 85,
      fiber: "4.5g",
      tip: "Loaded with live plant enzymes and Vitamin C to accelerate mineral and iron absorption."
    },
    {
      id: "salad_beetroot_mint",
      name: "Grated Beetroot & Fresh Mint Lime Salad",
      image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=600&auto=format&fit=crop&q=80",
      ingredients: ["1 cup freshly grated sweet beetroot", "1/2 cup diced cucumber", "2 tbsp chopped fresh mint leaves", "1 tbsp pomegranate seeds", "1 tsp lemon juice"],
      dressing: "Lemon juice, black salt, and roasted cumin powder",
      calories: 55,
      fiber: "3.2g",
      tip: "Nitrates in beetroot boost nitric oxide levels, supporting healthy blood flow and endurance."
    },
    {
      id: "salad_papaya_carrot",
      name: "Raw Papaya & Carrot Ribbon Slaw",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80",
      ingredients: ["1 cup peeled raw green papaya ribbons", "1/2 cup carrot ribbons", "1 green chili sliced lengthways", "Fresh coriander", "1 tsp roasted sesame seeds"],
      dressing: "Lime juice, crushed black pepper, and 1/4 tsp cold-pressed coconut oil",
      calories: 50,
      fiber: "3.5g",
      tip: "Natural papain enzymes in green papaya aid protein digestion and help flatten tummy bloating."
    },
    {
      id: "salad_kadala_chaat",
      name: "Boiled Black Chickpea & Tomato Herb Salad",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80",
      ingredients: ["1/2 cup boiled black chickpeas", "1 diced plum tomato", "1/2 diced cucumber", "Fresh cilantro", "Green chili"],
      dressing: "Chaat masala, lemon juice, and a pinch of rock salt",
      calories: 95,
      fiber: "5g",
      tip: "High satiety and slow-digesting resistant starch keep you full for hours."
    },
    {
      id: "salad_cabbage_pomegranate",
      name: "Crunchy Cabbage & Pomegranate Salad",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80",
      ingredients: ["1.5 cups thinly shredded crisp cabbage", "2 tbsp sweet pomegranate pearls", "1/4 cup diced cucumber", "Handful of coriander"],
      dressing: "Lemon juice, pink salt, and a pinch of black pepper",
      calories: 50,
      fiber: "3.2g",
      tip: "Sulfur-rich cabbage supports liver metabolism and provides massive plate volume for very few calories."
    },
    {
      id: "salad_vellarikka_pepper",
      name: "Country Cucumber & Crushed Black Pepper Salad",
      image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=600&auto=format&fit=crop&q=80",
      ingredients: ["1.5 cups cubed fresh country cucumber", "1/4 cup sliced shallots", "5-6 fresh curry leaves minced fine", "1 tbsp lemon juice", "Freshly crushed Tellicherry black pepper"],
      dressing: "Lemon juice and black pepper with a drop of coconut oil",
      calories: 35,
      fiber: "2g",
      tip: "Ultra-hydrating and cooling balance to spicy Kerala curries."
    }
  ],

  // Golden Principles
  fatLossTips: [
    {
      title: "The Kerala Matta Rice Rule (Portion Control)",
      text: "Never cut rice out completely. Kerala Matta (Chemba) rice is rich in magnesium and unpolished fiber. Keep your serving strictly to 1 level cup of cooked rice (approx 130-150g). Fill the other half of your plate with Thoran and Fresh Salad before serving rice."
    },
    {
      title: "The Half-Plate Salad Rule",
      text: "Always eat your raw salad 10 minutes before having rice or carbs. Eating raw dietary fiber first blunts blood sugar spikes by up to 35% and signals early satiety to the brain."
    },
    {
      title: "Kudampuli & Clay Pot Cooking",
      text: "Cook fish and curries in an authentic clay pot with Malabar Kudampuli (Garcinia Cambogia). Kudampuli is world-renowned for hydroxycitric acid (HCA), which helps curb fat synthesis without needing heavy coconut milk."
    },
    {
      title: "Tame the Coconut (Moderate, Don't Eliminate)",
      text: "Coconut is nutritious, but 1 grated cup has over 300 kcal. For fat loss: use 1-2 tablespoons grated coconut per thoran, avoid thick coconut paste curries daily, and choose light curd Moru, Rasam, or Kudampuli broth."
    },
    {
      title: "Spiced Buttermilk Over Sugary Coolers",
      text: "Kerala spiced buttermilk (Sambharam) with ginger, shallots, and curry leaves has only ~45 kcal and acts as a powerful gut probiotic. Drink 1-2 glasses daily, especially between 11 AM and 4 PM."
    },
    {
      title: "Measure Cooking Oil with a Teaspoon",
      text: "Never pour coconut oil directly from the bottle. Use a measuring teaspoon: limit total cooking oil to 2 to 3 teaspoons (10-15 ml) per day across all meals. Steaming (Puttu, Idiyappam, Meen Peera) requires zero oil."
    }
  ],

  // Dedicated 7-Day Grocery Shopping Database with Quantities
  groceryDatabase: [
    {
      category: "Grains, Cereals & Breads",
      icon: "🌾",
      items: [
        { name: "Kerala Matta / Chemba Rice (Unpolished)", qty: "1 kg", checked: false },
        { name: "Rolled Oats (Whole Flakes)", qty: "500g", checked: false },
        { name: "Whole Wheat Atta / Idiyappam Podi", qty: "1 kg", checked: false },
        { name: "Ragi (Finger Millet) Flour", qty: "500g", checked: false },
        { name: "Multigrain / Whole Wheat Sourdough Bread", qty: "1 loaf", checked: false }
      ]
    },
    {
      category: "Fresh Vegetables & Greens",
      icon: "🥗",
      items: [
        { name: "Country Cucumbers (Vellarikka)", qty: "6 large", checked: false },
        { name: "Carrots (Crisp Orange)", qty: "1 kg", checked: false },
        { name: "Shallots / Small Onions (Kunjulli)", qty: "500g", checked: false },
        { name: "Plum Tomatoes", qty: "1 kg", checked: false },
        { name: "Green Chilies / Bird's Eye (Kanthari)", qty: "100g", checked: false },
        { name: "Fresh Curry Leaves & Coriander Leaves", qty: "3 big bunches", checked: false },
        { name: "Fresh Ginger & Garlic bulbs", qty: "250g each", checked: false },
        { name: "Cabbage (Green or Purple)", qty: "1 medium head", checked: false },
        { name: "French Beans & Snake Gourd (Padavalanga)", qty: "500g each", checked: false },
        { name: "Ivy Gourd (Kovakka)", qty: "500g", checked: false },
        { name: "Red Spinach (Cheera) / Baby Spinach", qty: "2 bunches", checked: false },
        { name: "Beetroots", qty: "4 medium", checked: false },
        { name: "Raw Green Mango (Pacha Manga)", qty: "2 medium", checked: false },
        { name: "Lemons", qty: "8 to 10", checked: false }
      ]
    },
    {
      category: "Proteins, Fish & Dairy",
      icon: "🐟",
      items: [
        { name: "Fresh Kerala Fish (Sardines / Mackerel / Seer Fish)", qty: "1 kg (cleaned)", checked: false },
        { name: "Skinless Chicken Breast", qty: "750g", checked: false },
        { name: "Farm Fresh Eggs", qty: "1 to 2 dozen", checked: false },
        { name: "Low-Fat Natural Curd / Yogurt (for Sambharam)", qty: "1 kg", checked: false },
        { name: "Low-Fat Paneer or Firm Tofu", qty: "400g", checked: false }
      ]
    },
    {
      category: "Lentils, Seeds & Legumes",
      icon: "🫘",
      items: [
        { name: "Whole Green Gram (Cherupayar) for boiling & sprouting", qty: "500g", checked: false },
        { name: "Black Chickpeas (Kadala)", qty: "500g", checked: false },
        { name: "Yellow Moong Dal (Parippu)", qty: "250g", checked: false },
        { name: "Roasted Makhana (Fox Nuts)", qty: "150g", checked: false },
        { name: "Chia Seeds & Whole Almonds / Walnuts", qty: "100g each", checked: false }
      ]
    },
    {
      category: "Kerala Spices & Healthy Pantry",
      icon: "🧂",
      items: [
        { name: "Kudampuli (Malabar Tamarind)", qty: "100g", checked: false },
        { name: "Tellicherry Whole Black Pepper & Fresh Powder", qty: "150g", checked: false },
        { name: "Cumin Seeds (Jeerakam)", qty: "100g", checked: false },
        { name: "Mustard Seeds & Fenugreek Seeds (Uluva)", qty: "100g each", checked: false },
        { name: "Pathimugam (Sappan wood shavings)", qty: "1 packet", checked: false },
        { name: "Pure Cold-Pressed Coconut Oil (measured by teaspoon)", qty: "250ml", checked: false },
        { name: "Pink Himalayan Rock Salt", qty: "1 pack", checked: false }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = KERALA_DIET_DATABASE;
}
