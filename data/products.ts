import { Product } from "./types";

// =============================================================================
// DOLCI Premium Pastry Shop - Product Catalog
// 17 handcrafted products across 7 categories
// =============================================================================

// Shared customization options for cakes
const cakeCustomizations = [
  {
    id: "cake-message",
    label: "Cake Message",
    labelHe: "הקדשה על העוגה",
    type: "text" as const,
    maxLength: 50,
    priceModifier: 0,
  },
  {
    id: "cake-candles",
    label: "Number of Candles",
    labelHe: "מספר נרות",
    type: "number" as const,
    priceModifier: 2,
  },
  {
    id: "cake-topper",
    label: "Cake Topper",
    labelHe: "קישוט עליון",
    type: "select" as const,
    options: ["None", "Happy Birthday", "Mazal Tov", "Custom"],
    priceModifier: 15,
  },
];

// Standard cake sizes
const cakeSizes = [
  { id: "size-6", label: '6" (6-8 servings)', price: 0 },
  { id: "size-8", label: '8" (10-12 servings)', price: 45 },
  { id: "size-10", label: '10" (14-18 servings)', price: 90 },
];

export const products: Product[] = [
  // ===========================================================================
  // CAKES (4 products)
  // ===========================================================================
  {
    id: "prod-1",
    slug: "chocolate-truffle-cake",
    name: "Chocolate Truffle Cake",
    nameHe: "עוגת טראפל שוקולד",
    description:
      "A symphony of dark Belgian chocolate ganache, layered with silky hazelnut praline on a buttery shortcrust base, crowned with hand-tempered chocolate shards. Each slice reveals a molten heart of Valrhona chocolate that whispers of Parisian patisseries and midnight indulgences.",
    descriptionHe:
      "סימפוניה של גנאש שוקולד בלגי כהה, בשכבות פרלין אגוזי לוז משיי על בסיס בצק חמאתי פריך, מוכתרת ברסיסי שוקולד מותכלמים ביד. כל פרוסה חושפת לב נמס של שוקולד וולרונה הלוחש על קונדיטוריות פריזאיות ופינוקי חצות.",
    price: 185,
    currency: "ILS",
    images: [
      "/img/big/324387906_539849348167967_3700461515002332041_n.webp",
      "/img/big/324069491_165902059489454_503708945648375275_n.webp",
    ],
    thumbnail:
      "/img/big/324387906_539849348167967_3700461515002332041_n.webp",
    category: "cakes",
    tags: ["best-seller"],
    badges: ["Best Seller", "Premium"],
    allergens: ["gluten", "dairy", "eggs", "nuts"],
    dietary: [],
    ingredients:
      "Belgian dark chocolate (70%), European butter, free-range eggs, hazelnut praline paste, heavy cream, unbleached flour, cane sugar, Madagascar vanilla bean, fleur de sel",
    ingredientsHe:
      "שוקולד בלגי מריר (70%), חמאה אירופית, ביצים מחופש, משחת פרלין אגוזי לוז, שמנת מתוקה, קמח לא מולבן, סוכר קנים, מקל וניל ממדגסקר, פלר דה סל",
    nutritionalInfo: {
      calories: 480,
      fat: 28,
      carbs: 52,
      protein: 7,
      sugar: 38,
    },
    sizes: cakeSizes,
    customizable: true,
    customizationOptions: cakeCustomizations,
    rating: 4.9,
    reviewCount: 127,
    inStock: true,
    featured: true,
    sortOrder: 1,
    createdAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "prod-2",
    slug: "red-velvet-dream",
    name: "Red Velvet Dream",
    nameHe: "עוגת רד ולווט",
    description:
      "Draped in clouds of tangy cream cheese frosting, our Red Velvet Dream reveals layers of crimson velvet sponge so tender it dissolves on the tongue. A delicate dance between cocoa's bitterness and vanilla's warmth, finished with a cascade of white chocolate curls that shimmer like freshly fallen snow.",
    descriptionHe:
      "עטופה בעננים של ציפוי גבינת שמנת חמצמצה, עוגת הרד ולווט שלנו חושפת שכבות של ספוג קטיפתי ארגמני כה רך שהוא נמס על הלשון. ריקוד עדין בין המרירות של הקקאו לחום הוניל, מסיימת במפל תלתלי שוקולד לבן הנוצצים כשלג טרי.",
    price: 165,
    currency: "ILS",
    images: [
      "/img/big/324100091_1213952946187450_6907703106746645627_n.webp",
      "/img/big/323960340_1772188096501548_5098724784355365297_n.webp",
    ],
    thumbnail:
      "/img/big/324100091_1213952946187450_6907703106746645627_n.webp",
    category: "cakes",
    tags: [],
    badges: ["Featured"],
    allergens: ["gluten", "dairy", "eggs"],
    dietary: ["nut-free"],
    ingredients:
      "Cream cheese, European butter, free-range eggs, Dutch-process cocoa, buttermilk, unbleached flour, white chocolate, cane sugar, pure vanilla extract, white wine vinegar, food coloring (beet-based)",
    ingredientsHe:
      "גבינת שמנת, חמאה אירופית, ביצים מחופש, קקאו הולנדי, חמאה, קמח לא מולבן, שוקולד לבן, סוכר קנים, תמצית וניל טהורה, חומץ יין לבן, צבע מאכל (מבוסס סלק)",
    nutritionalInfo: {
      calories: 420,
      fat: 22,
      carbs: 50,
      protein: 6,
      sugar: 35,
    },
    sizes: cakeSizes,
    customizable: true,
    customizationOptions: cakeCustomizations,
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
    featured: true,
    sortOrder: 2,
    createdAt: "2024-02-10T00:00:00Z",
  },
  {
    id: "prod-3",
    slug: "classic-cheesecake",
    name: "Classic Cheesecake",
    nameHe: "עוגת גבינה קלאסית",
    description:
      "The timeless embrace of New York meets Tel Aviv. A towering cloud of triple-cream cheese baked low and slow until the center trembles like a gentle sigh. Resting on a buttery graham cracker crust kissed with cinnamon, this is comfort elevated to an art form.",
    descriptionHe:
      "החיבוק הנצחי של ניו יורק פוגש את תל אביב. ענן מתנשא של שלושה סוגי גבינת שמנת אפוי לאט ובעדינות עד שהמרכז רועד כמו אנחה קלה. נח על בסיס ביסקוויטים חמאתי מנושק בקינמון, זהו נוחם שהפך ליצירת אמנות.",
    price: 145,
    currency: "ILS",
    images: [
      "/img/big/324541550_1362202981211618_3328085499442945246_n.webp",
    ],
    thumbnail:
      "/img/big/324541550_1362202981211618_3328085499442945246_n.webp",
    category: "cakes",
    tags: [],
    badges: ["Classic"],
    allergens: ["gluten", "dairy", "eggs"],
    dietary: ["nut-free"],
    ingredients:
      "Philadelphia cream cheese, sour cream, ricotta cheese, free-range eggs, graham crackers, European butter, cane sugar, pure vanilla bean paste, cinnamon, lemon zest",
    ingredientsHe:
      "גבינת שמנת פילדלפיה, שמנת חמוצה, גבינת ריקוטה, ביצים מחופש, ביסקוויטים, חמאה אירופית, סוכר קנים, משחת וניל טהורה, קינמון, גרידת לימון",
    nutritionalInfo: {
      calories: 390,
      fat: 24,
      carbs: 36,
      protein: 8,
      sugar: 28,
    },
    sizes: cakeSizes,
    customizable: true,
    customizationOptions: cakeCustomizations,
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    featured: false,
    sortOrder: 3,
    createdAt: "2024-01-05T00:00:00Z",
  },
  {
    id: "prod-4",
    slug: "forest-fruit-tart",
    name: "Forest Fruit Tart",
    nameHe: "טארט פירות יער",
    description:
      "A jewel-toned crown of wild blackberries, raspberries, and blueberries arranged petal by petal atop a pillow of vanilla bean pastry cream. The sable Breton crust shatters with a whisper, yielding to a berry compote that tastes of summer meadows and childhood wonder.",
    descriptionHe:
      "כתר בגווני אבני חן של פטל בר, פטל ואוכמניות מסודרים עלה אחר עלה על כרית של קרם פטיסייר וניל. בצק הסאבלה הברטוני נשבר בלחישה, נפתח לקומפוט פירות יער בטעם של שדות קיץ ופליאת ילדות.",
    price: 155,
    currency: "ILS",
    images: [
      "/img/big/324708592_144289051794038_2684966004159757230_n.webp",
      "/img/big/324852666_1567488390348649_568319287218294934_n.webp",
    ],
    thumbnail:
      "/img/big/324708592_144289051794038_2684966004159757230_n.webp",
    category: "cakes",
    tags: ["chefs-pick"],
    badges: ["Chef's Pick"],
    allergens: ["gluten", "dairy", "eggs"],
    dietary: ["nut-free"],
    ingredients:
      "Fresh blackberries, raspberries, blueberries, European butter, free-range eggs, pastry cream (milk, vanilla, cornstarch), unbleached flour, cane sugar, lemon juice, apricot glaze",
    ingredientsHe:
      "פטל בר טרי, פטל, אוכמניות, חמאה אירופית, ביצים מחופש, קרם פטיסייר (חלב, וניל, עמילן תירס), קמח לא מולבן, סוכר קנים, מיץ לימון, ציפוי משמש",
    nutritionalInfo: {
      calories: 340,
      fat: 18,
      carbs: 42,
      protein: 5,
      sugar: 26,
    },
    sizes: [
      { id: "size-6", label: '6" (6-8 servings)', price: 0 },
      { id: "size-8", label: '8" (10-12 servings)', price: 50 },
    ],
    customizable: true,
    customizationOptions: [cakeCustomizations[0]],
    rating: 4.8,
    reviewCount: 73,
    inStock: true,
    featured: false,
    sortOrder: 4,
    createdAt: "2024-03-20T00:00:00Z",
  },

  // ===========================================================================
  // PASTRIES (3 products)
  // ===========================================================================
  {
    id: "prod-5",
    slug: "belgian-chocolate-eclair",
    name: "Belgian Chocolate Eclair",
    nameHe: "אקלר שוקולד בלגי",
    description:
      "A golden torpedo of choux pastry, impossibly light and hollow, cradling a river of Belgian chocolate pastry cream. Enrobed in a mirror-gloss chocolate glaze that catches the light like polished mahogany, each bite is a passage to the grand boulevards of Brussels.",
    descriptionHe:
      "טורפדו מוזהב של בצק שו, קל להפליא וחלול, מחבק נהר של קרם פטיסייר שוקולד בלגי. עטוף בציפוי שוקולד מבריק כמראה שתופס את האור כמהגוני מלוטש, כל ביס הוא מסע לשדרות הגדולות של בריסל.",
    price: 28,
    currency: "ILS",
    images: [
      "/img/big/324860600_565541368764551_4472766876171986667_n.webp",
    ],
    thumbnail:
      "/img/big/324860600_565541368764551_4472766876171986667_n.webp",
    category: "pastries",
    tags: ["best-seller"],
    badges: ["Best Seller"],
    allergens: ["gluten", "dairy", "eggs"],
    dietary: ["nut-free"],
    ingredients:
      "Belgian dark chocolate, whole milk, European butter, free-range eggs, unbleached flour, heavy cream, cane sugar, vanilla bean, cocoa powder",
    ingredientsHe:
      "שוקולד בלגי מריר, חלב מלא, חמאה אירופית, ביצים מחופש, קמח לא מולבן, שמנת מתוקה, סוכר קנים, מקל וניל, אבקת קקאו",
    nutritionalInfo: {
      calories: 310,
      fat: 18,
      carbs: 32,
      protein: 6,
      sugar: 20,
    },
    customizable: false,
    rating: 4.8,
    reviewCount: 201,
    inStock: true,
    featured: false,
    sortOrder: 5,
    createdAt: "2024-01-10T00:00:00Z",
  },
  {
    id: "prod-6",
    slug: "napoleon-mille-feuille",
    name: "Napoleon Mille-feuille",
    nameHe: "נפוליאון מיל פוי",
    description:
      "One thousand leaves of hand-laminated puff pastry, each as thin as parchment, shattered into golden layers that cradle clouds of Tahitian vanilla diplomat cream. Crowned with marbled fondant in the classic Parisian style, this is architecture you can eat.",
    descriptionHe:
      "אלף עלים של בצק עלים מרובד ביד, כל אחד דק כקלף, נשברים לשכבות מוזהבות המחבקות עננים של קרם דיפלומט וניל טהיטי. מוכתר בפונדנט משויש בסגנון הפריזאי הקלאסי, זוהי אדריכלות שאפשר לאכול.",
    price: 32,
    currency: "ILS",
    images: [
      "/img/big/324860725_695032175403891_2270551768973024894_n.webp",
    ],
    thumbnail:
      "/img/big/324860725_695032175403891_2270551768973024894_n.webp",
    category: "pastries",
    tags: ["chefs-pick"],
    badges: ["Chef's Pick"],
    allergens: ["gluten", "dairy", "eggs"],
    dietary: ["nut-free"],
    ingredients:
      "European butter (for lamination), unbleached flour, whole milk, free-range eggs, heavy cream, cane sugar, Tahitian vanilla bean, fondant, dark chocolate (for marble), salt",
    ingredientsHe:
      "חמאה אירופית (לריבוד), קמח לא מולבן, חלב מלא, ביצים מחופש, שמנת מתוקה, סוכר קנים, מקל וניל טהיטי, פונדנט, שוקולד מריר (לשיוש), מלח",
    nutritionalInfo: {
      calories: 380,
      fat: 22,
      carbs: 40,
      protein: 5,
      sugar: 24,
    },
    customizable: false,
    rating: 4.7,
    reviewCount: 94,
    inStock: true,
    featured: false,
    sortOrder: 6,
    createdAt: "2024-02-15T00:00:00Z",
  },
  {
    id: "prod-7",
    slug: "pistachio-rose-profiteroles",
    name: "Pistachio Rose Profiteroles",
    nameHe: "פרופיטרולים פיסטוק וורד",
    description:
      "Ethereal choux puffs filled with Iranian pistachio cream, kissed with Damascus rose water and drizzled in ruby-hued white chocolate. A love letter to the spice markets of the Middle East, where every morsel blooms with the poetry of ancient gardens.",
    descriptionHe:
      "כדורי שו אתריים ממולאים קרם פיסטוק איראני, מנושקים במי ורדים דמשקאיים ומטופטפים בשוקולד לבן בגוון רובי. מכתב אהבה לשווקי התבלינים של המזרח התיכון, שבו כל פירור פורח בשירת גנים עתיקים.",
    price: 42,
    currency: "ILS",
    images: [
      "/img/big/324942419_901518597869884_1275714989711257874_n.webp",
    ],
    thumbnail:
      "/img/big/324942419_901518597869884_1275714989711257874_n.webp",
    category: "pastries",
    tags: ["new"],
    badges: ["New"],
    allergens: ["gluten", "dairy", "eggs", "nuts"],
    dietary: [],
    ingredients:
      "Iranian pistachios, European butter, free-range eggs, heavy cream, white chocolate, unbleached flour, rose water, cane sugar, freeze-dried raspberries, vanilla bean",
    ingredientsHe:
      "פיסטוקים איראניים, חמאה אירופית, ביצים מחופש, שמנת מתוקה, שוקולד לבן, קמח לא מולבן, מי ורדים, סוכר קנים, פטל מיובש בהקפאה, מקל וניל",
    nutritionalInfo: {
      calories: 350,
      fat: 20,
      carbs: 36,
      protein: 7,
      sugar: 22,
    },
    customizable: false,
    rating: 4.9,
    reviewCount: 42,
    inStock: true,
    featured: false,
    sortOrder: 7,
    createdAt: "2025-11-01T00:00:00Z",
  },

  // ===========================================================================
  // COOKIES (3 products)
  // ===========================================================================
  {
    id: "prod-8",
    slug: "dark-chocolate-chunk-cookies",
    name: "Dark Chocolate Chunk Cookies",
    nameHe: "עוגיות שוקולד מריר",
    description:
      "Six generously thick cookies with a crackled golden crust yielding to a fudgy, molten center studded with hand-chopped Callebaut chocolate chunks. Brown butter and dark muscovado sugar create a toffee-like depth that lingers on the palate like a sweet memory.",
    descriptionHe:
      "שש עוגיות עבות בנדיבות עם קרום מוזהב סדוק שנפתח למרכז עשיר ונמס משובץ בנתחי שוקולד קאלבו חצובים ביד. חמאה חומה וסוכר מוסקובדו כהה יוצרים עומק של טופי שמתעכב על החך כמו זיכרון מתוק.",
    price: 45,
    currency: "ILS",
    images: [
      "/img/big/325296798_6055180934543683_4479903544277194785_n.webp",
    ],
    thumbnail:
      "/img/big/325296798_6055180934543683_4479903544277194785_n.webp",
    category: "cookies",
    tags: [],
    badges: ["Box of 6"],
    allergens: ["gluten", "dairy", "eggs", "soy"],
    dietary: ["nut-free"],
    ingredients:
      "Callebaut dark chocolate, European butter, free-range eggs, dark muscovado sugar, unbleached flour, brown sugar, vanilla extract, baking soda, fleur de sel",
    ingredientsHe:
      "שוקולד מריר קאלבו, חמאה אירופית, ביצים מחופש, סוכר מוסקובדו כהה, קמח לא מולבן, סוכר חום, תמצית וניל, סודה לשתייה, פלר דה סל",
    nutritionalInfo: {
      calories: 220,
      fat: 12,
      carbs: 26,
      protein: 3,
      sugar: 16,
    },
    customizable: false,
    rating: 4.6,
    reviewCount: 112,
    inStock: true,
    featured: false,
    sortOrder: 8,
    createdAt: "2024-04-01T00:00:00Z",
  },
  {
    id: "prod-9",
    slug: "french-macarons-box",
    name: "French Macarons Box",
    nameHe: "מארז מקרונים צרפתיים",
    description:
      "Twelve jewel-like macarons in a curated palette of flavors: Tahitian vanilla, salted caramel, raspberry rose, pistachio, dark chocolate, and passion fruit. Each shell offers that coveted crackle before melting into a cloud of ganache — the pinnacle of French confectionery.",
    descriptionHe:
      "שנים עשר מקרונים דמויי אבני חן בפלטת טעמים אצורה: וניל טהיטי, קרמל מלוח, פטל וורד, פיסטוק, שוקולד מריר ופסיפלורה. כל קונכייה מציעה את הפריכות המיוחלת לפני שנמסה לענן של גנאש — פסגת הקונדיטוריה הצרפתית.",
    price: 78,
    currency: "ILS",
    images: [
      "/img/big/325460251_3083779028594630_7768461179754871406_n.webp",
      "/img/big/325543630_589946176475693_8413710174093720940_n.webp",
    ],
    thumbnail:
      "/img/big/325460251_3083779028594630_7768461179754871406_n.webp",
    category: "cookies",
    tags: ["best-seller"],
    badges: ["Best Seller", "12 Pieces"],
    allergens: ["gluten", "dairy", "eggs", "nuts"],
    dietary: [],
    ingredients:
      "Almond flour, free-range egg whites, cane sugar, powdered sugar, various ganache fillings (chocolate, fruit purees, nut pastes), natural food colorings, vanilla, rose water",
    ingredientsHe:
      "קמח שקדים, חלבוני ביצים מחופש, סוכר קנים, אבקת סוכר, מילויי גנאש שונים (שוקולד, מחיות פירות, משחות אגוזים), צבעי מאכל טבעיים, וניל, מי ורדים",
    nutritionalInfo: {
      calories: 95,
      fat: 4,
      carbs: 14,
      protein: 2,
      sugar: 12,
    },
    customizable: false,
    rating: 4.9,
    reviewCount: 187,
    inStock: true,
    featured: true,
    sortOrder: 9,
    createdAt: "2024-01-20T00:00:00Z",
  },
  {
    id: "prod-10",
    slug: "alfajores-dulce-de-leche",
    name: "Alfajores Dulce de Leche",
    nameHe: "אלפחורס דולסה דה לצ'ה",
    description:
      "Four crumbly cornstarch cookies sandwiching a generous ribbon of house-made dulce de leche, their edges rolled in a snowfall of desiccated coconut. Inspired by Argentine tradition and perfected in our ovens, they dissolve on the tongue like a caramel-scented daydream.",
    descriptionHe:
      "ארבע עוגיות עמילן תירס פריכות כורכות סרט נדיב של דולסה דה לצ'ה תוצרת הבית, קצותיהן מגולגלות בשלג של קוקוס מיובש. בהשראת המסורת הארגנטינאית ומושלמות בתנורים שלנו, הן נמסות על הלשון כמו חלום בהקיץ בניחוח קרמל.",
    price: 55,
    currency: "ILS",
    images: [
      "/img/big/326051071_154057054070013_8532719425228294810_n.webp",
    ],
    thumbnail:
      "/img/big/326051071_154057054070013_8532719425228294810_n.webp",
    category: "cookies",
    tags: [],
    badges: ["Box of 4"],
    allergens: ["gluten", "dairy", "eggs"],
    dietary: ["nut-free"],
    ingredients:
      "Cornstarch, European butter, free-range eggs, condensed milk (for dulce de leche), desiccated coconut, powdered sugar, vanilla extract, lemon zest, baking powder",
    ingredientsHe:
      "עמילן תירס, חמאה אירופית, ביצים מחופש, חלב מרוכז (לדולסה דה לצ'ה), קוקוס מיובש, אבקת סוכר, תמצית וניל, גרידת לימון, אבקת אפייה",
    nutritionalInfo: {
      calories: 195,
      fat: 10,
      carbs: 24,
      protein: 3,
      sugar: 15,
    },
    customizable: false,
    rating: 4.5,
    reviewCount: 58,
    inStock: true,
    featured: false,
    sortOrder: 10,
    createdAt: "2024-05-12T00:00:00Z",
  },

  // ===========================================================================
  // BREADS (2 products)
  // ===========================================================================
  {
    id: "prod-11",
    slug: "artisan-sourdough-loaf",
    name: "Artisan Sourdough Loaf",
    nameHe: "לחם מחמצת אומן",
    description:
      "Born from a 40-year-old starter named Miriam, our sourdough undergoes a 72-hour cold fermentation that develops a complex tang and an open, honeycomb crumb. The crackling crust sings when sliced, releasing the ancient perfume of slow-fermented wheat and wild yeast.",
    descriptionHe:
      "נולד ממחמצת בת 40 שנה בשם מרים, לחם המחמצת שלנו עובר תסיסה קרה של 72 שעות המפתחת חמיצות מורכבת ופנים פתוח כחלת דבש. הקרום הפריך שר כשחותכים, משחרר את הבושם העתיק של חיטה מותססת לאט ושמרי בר.",
    price: 38,
    currency: "ILS",
    images: [
      "/img/big/326540775_678755670583985_7932180216446372157_n.webp",
    ],
    thumbnail:
      "/img/big/326540775_678755670583985_7932180216446372157_n.webp",
    category: "breads",
    tags: [],
    badges: ["72h Ferment"],
    allergens: ["gluten"],
    dietary: ["vegan", "nut-free"],
    ingredients:
      "Heritage wheat flour, water, sourdough starter (flour, water, wild yeast), sea salt",
    ingredientsHe:
      "קמח חיטה מסורתי, מים, מחמצת (קמח, מים, שמרי בר), מלח ים",
    nutritionalInfo: {
      calories: 130,
      fat: 0.5,
      carbs: 27,
      protein: 5,
      sugar: 1,
    },
    customizable: false,
    rating: 4.7,
    reviewCount: 83,
    inStock: true,
    featured: false,
    sortOrder: 11,
    createdAt: "2024-01-08T00:00:00Z",
  },
  {
    id: "prod-12",
    slug: "traditional-challah",
    name: "Traditional Challah",
    nameHe: "חלה מסורתית",
    description:
      "Six golden braids woven with love and tradition, our challah emerges from the oven with a mahogany sheen that speaks of Shabbat tables past and present. The enriched dough yields a cotton-soft interior sweetened with wildflower honey, each strand pulling apart in tender, fragrant ribbons.",
    descriptionHe:
      "שש צמות מוזהבות שזורות באהבה ומסורת, החלה שלנו יוצאת מהתנור עם ברק מהגוני המספר על שולחנות שבת מעבר ומהווה. הבצק המועשר חושף פנים רך כצמר גפן ממותק בדבש פרחי בר, כל גדיל נמשך לסרטים רכים וריחניים.",
    price: 32,
    currency: "ILS",
    images: [
      "/img/big/326598428_542534937825719_6707161673814823660_n.webp",
    ],
    thumbnail:
      "/img/big/326598428_542534937825719_6707161673814823660_n.webp",
    category: "breads",
    tags: ["seasonal"],
    badges: ["Shabbat Special"],
    allergens: ["gluten", "dairy", "eggs"],
    dietary: ["nut-free"],
    ingredients:
      "Unbleached bread flour, free-range eggs, wildflower honey, European butter, fresh yeast, warm water, sea salt, sesame seeds (optional topping)",
    ingredientsHe:
      "קמח לחם לא מולבן, ביצים מחופש, דבש פרחי בר, חמאה אירופית, שמרים טריים, מים חמים, מלח ים, שומשום (תוספת אופציונלית)",
    nutritionalInfo: {
      calories: 180,
      fat: 5,
      carbs: 30,
      protein: 6,
      sugar: 6,
    },
    customizable: false,
    rating: 4.8,
    reviewCount: 145,
    inStock: true,
    featured: false,
    sortOrder: 12,
    createdAt: "2024-01-03T00:00:00Z",
  },

  // ===========================================================================
  // VIENNOISERIE (3 products)
  // ===========================================================================
  {
    id: "prod-13",
    slug: "classic-butter-croissant",
    name: "Classic Butter Croissant",
    nameHe: "קרואסון חמאה קלאסי",
    description:
      "Eighty-one layers of hand-laminated dough and pure French butter, folded with the patience of a master artisan over three days. The result: a golden crescent with a shatteringly crisp exterior that explodes into a thousand flaky shards, revealing a honeycomb of buttery, steam-puffed chambers within.",
    descriptionHe:
      "שמונים ואחת שכבות של בצק מרובד ביד וחמאה צרפתית טהורה, מקופלות בסבלנות של אומן מומחה לאורך שלושה ימים. התוצאה: סהרון מוזהב עם חיצוניות פריכה להפליא שמתפוצצת לאלף רסיסים, חושפת חלת דבש של תאים חמאתיים ומנופחי קיטור.",
    price: 18,
    currency: "ILS",
    images: [
      "/img/big/327778382_5903229193066716_5234002798289153398_n.webp",
    ],
    thumbnail:
      "/img/big/327778382_5903229193066716_5234002798289153398_n.webp",
    category: "viennoiserie",
    tags: ["best-seller"],
    badges: ["Best Seller", "3-Day Process"],
    allergens: ["gluten", "dairy", "eggs"],
    dietary: ["nut-free"],
    ingredients:
      "French butter (AOP Charentes-Poitou), T55 wheat flour, whole milk, free-range eggs (for egg wash), fresh yeast, cane sugar, sea salt",
    ingredientsHe:
      "חמאה צרפתית (AOP שרנט-פואטו), קמח T55, חלב מלא, ביצים מחופש (למריחה), שמרים טריים, סוכר קנים, מלח ים",
    nutritionalInfo: {
      calories: 270,
      fat: 16,
      carbs: 28,
      protein: 5,
      sugar: 5,
    },
    customizable: false,
    rating: 4.9,
    reviewCount: 312,
    inStock: true,
    featured: false,
    sortOrder: 13,
    createdAt: "2024-01-02T00:00:00Z",
  },
  {
    id: "prod-14",
    slug: "pain-au-chocolat",
    name: "Pain au Chocolat",
    nameHe: "פאן או שוקולה",
    description:
      "Two batons of Valrhona dark chocolate entombed within the same 81-layer laminated dough as our legendary croissant. As the pastry bakes, the chocolate melts into rivers of bittersweet silk, creating pockets of pure indulgence that pool within each golden, flaky layer.",
    descriptionHe:
      "שני מקלות של שוקולד וולרונה מריר טמונים בתוך אותו בצק מרובד בן 81 שכבות כמו הקרואסון האגדי שלנו. בזמן האפייה, השוקולד נמס לנהרות של משי מר-מתוק, יוצר כיסי פינוק טהורים השוכנים בתוך כל שכבה מוזהבת ופריכה.",
    price: 22,
    currency: "ILS",
    images: [
      "/img/big/329404378_1222225511747133_1707114845678366544_n.webp",
    ],
    thumbnail:
      "/img/big/329404378_1222225511747133_1707114845678366544_n.webp",
    category: "viennoiserie",
    tags: [],
    badges: [],
    allergens: ["gluten", "dairy", "eggs", "soy"],
    dietary: ["nut-free"],
    ingredients:
      "French butter (AOP Charentes-Poitou), Valrhona dark chocolate (66%), T55 wheat flour, whole milk, free-range eggs (for egg wash), fresh yeast, cane sugar, sea salt",
    ingredientsHe:
      "חמאה צרפתית (AOP שרנט-פואטו), שוקולד וולרונה מריר (66%), קמח T55, חלב מלא, ביצים מחופש (למריחה), שמרים טריים, סוכר קנים, מלח ים",
    nutritionalInfo: {
      calories: 320,
      fat: 18,
      carbs: 34,
      protein: 6,
      sugar: 12,
    },
    customizable: false,
    rating: 4.8,
    reviewCount: 178,
    inStock: true,
    featured: false,
    sortOrder: 14,
    createdAt: "2024-01-02T00:00:00Z",
  },
  {
    id: "prod-15",
    slug: "almond-croissant",
    name: "Almond Croissant",
    nameHe: "קרואסון שקדים",
    description:
      "Our day-old croissants reborn in glory: split, soaked in orange blossom syrup, filled with house-made frangipane, then crowned with sliced Marcona almonds and baked until the top becomes a caramelized mosaic. A dusting of powdered sugar falls like morning frost on this twice-baked masterpiece.",
    descriptionHe:
      "הקרואסונים שלנו נולדים מחדש בתפארת: חצויים, ספוגים בסירופ פריחת תפוז, ממולאים בפרנג'יפן תוצרת הבית, ומוכתרים בפרוסות שקדי מרקונה ואפויים עד שהחלק העליון הופך לפסיפס מקורמל. אבקת סוכר נושרת ככפור בוקר על יצירת מופת אפויה כפליים.",
    price: 25,
    currency: "ILS",
    images: [
      "/img/big/329805507_618930263542400_564250505725633671_n.webp",
    ],
    thumbnail:
      "/img/big/329805507_618930263542400_564250505725633671_n.webp",
    category: "viennoiserie",
    tags: ["chefs-pick"],
    badges: ["Chef's Pick", "Twice-Baked"],
    allergens: ["gluten", "dairy", "eggs", "nuts"],
    dietary: [],
    ingredients:
      "Our butter croissant, Marcona almonds, almond flour, European butter, free-range eggs, powdered sugar, cane sugar, orange blossom water, vanilla extract, sea salt",
    ingredientsHe:
      "קרואסון החמאה שלנו, שקדי מרקונה, קמח שקדים, חמאה אירופית, ביצים מחופש, אבקת סוכר, סוכר קנים, מי פריחת תפוז, תמצית וניל, מלח ים",
    nutritionalInfo: {
      calories: 410,
      fat: 24,
      carbs: 38,
      protein: 9,
      sugar: 18,
    },
    customizable: false,
    rating: 4.9,
    reviewCount: 134,
    inStock: true,
    featured: false,
    sortOrder: 15,
    createdAt: "2024-02-01T00:00:00Z",
  },

  // ===========================================================================
  // GIFT BOXES (2 products)
  // ===========================================================================
  {
    id: "prod-16",
    slug: "assorted-pastry-box",
    name: "Assorted Pastry Box",
    nameHe: "מארז מאפים מגוון",
    description:
      "A curated treasure chest of our finest creations: two butter croissants, two pain au chocolat, a chocolate eclair, a Napoleon mille-feuille, and four macarons — nestled in tissue paper within our signature gold-embossed box. The perfect gift for the pastry lover who deserves the world, beautifully presented.",
    descriptionHe:
      "תיבת אוצרות אצורה של היצירות המשובחות שלנו: שני קרואסוני חמאה, שני פאן או שוקולה, אקלר שוקולד, נפוליאון מיל פוי, וארבעה מקרונים — שוכנים בנייר משי בתוך הקופסה המוטבעת בזהב שלנו. המתנה המושלמת לחובב המאפים שמגיע לו את העולם, מוגשת בהידור.",
    price: 165,
    currency: "ILS",
    images: [
      "/img/big/336814809_606829274289547_5109278915639889759_n.webp",
      "/img/big/336955732_1419285378866870_8815479641243638302_n.webp",
    ],
    thumbnail:
      "/img/big/336814809_606829274289547_5109278915639889759_n.webp",
    category: "gift-boxes",
    tags: [],
    badges: ["Featured", "10 Pieces"],
    allergens: ["gluten", "dairy", "eggs", "nuts", "soy"],
    dietary: [],
    ingredients:
      "Contains: butter croissants, pain au chocolat, chocolate eclair, Napoleon mille-feuille, assorted macarons. See individual product listings for full ingredient details.",
    ingredientsHe:
      "מכיל: קרואסוני חמאה, פאן או שוקולה, אקלר שוקולד, נפוליאון מיל פוי, מקרונים מגוונים. ראו פירוט מרכיבים מלא בדפי המוצרים הבודדים.",
    nutritionalInfo: {
      calories: 2800,
      fat: 156,
      carbs: 298,
      protein: 48,
      sugar: 168,
    },
    customizable: false,
    rating: 4.8,
    reviewCount: 67,
    inStock: true,
    featured: true,
    sortOrder: 16,
    createdAt: "2024-06-01T00:00:00Z",
  },
  {
    id: "prod-17",
    slug: "luxury-macaron-gift-set",
    name: "Luxury Macaron Gift Set",
    nameHe: "מארז מקרונים יוקרתי",
    description:
      "Twenty-four exquisite macarons in eight curated flavors, presented in a velvet-lined mahogany box with a hand-tied silk ribbon. From the exotic yuzu-ginger to the classic Madagascar vanilla, each macaron is a gemstone of flavor — a gift that speaks of elegance, refinement, and the sweetest intentions.",
    descriptionHe:
      "עשרים וארבעה מקרונים מעולים בשמונה טעמים אצורים, מוגשים בקופסת מהגוני מרופדת קטיפה עם סרט משי קשור ביד. מהיוזו-ג'ינג'ר האקזוטי ועד הוניל הקלאסי ממדגסקר, כל מקרון הוא אבן חן של טעם — מתנה המדברת על אלגנטיות, עידון והכוונות המתוקות ביותר.",
    price: 220,
    originalPrice: 250,
    currency: "ILS",
    images: [
      "/img/big/338289865_1559868654535291_437119550887817844_n.webp",
      "/img/big/338419522_204292885634048_616030308694207192_n.webp",
    ],
    thumbnail:
      "/img/big/338289865_1559868654535291_437119550887817844_n.webp",
    category: "gift-boxes",
    tags: ["new", "limited"],
    badges: ["New", "Limited Edition", "24 Pieces"],
    allergens: ["gluten", "dairy", "eggs", "nuts"],
    dietary: [],
    ingredients:
      "Almond flour, free-range egg whites, cane sugar, powdered sugar, ganache fillings (various: chocolate, fruit purees, yuzu, ginger, vanilla, rose water, pistachio, salted caramel), natural food colorings",
    ingredientsHe:
      "קמח שקדים, חלבוני ביצים מחופש, סוכר קנים, אבקת סוכר, מילויי גנאש (מגוון: שוקולד, מחיות פירות, יוזו, ג'ינג'ר, וניל, מי ורדים, פיסטוק, קרמל מלוח), צבעי מאכל טבעיים",
    nutritionalInfo: {
      calories: 95,
      fat: 4,
      carbs: 14,
      protein: 2,
      sugar: 12,
    },
    customizable: false,
    rating: 5.0,
    reviewCount: 23,
    inStock: true,
    featured: false,
    sortOrder: 17,
    createdAt: "2025-12-01T00:00:00Z",
  },
];
