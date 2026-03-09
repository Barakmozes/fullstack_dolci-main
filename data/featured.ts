import { FeaturedCollection } from "./types";

export const featuredCollections: FeaturedCollection[] = [
  {
    id: "collection-best-sellers",
    title: "Best Sellers",
    titleHe: "רבי המכר",
    description:
      "Our most beloved creations, chosen by thousands of happy customers",
    descriptionHe:
      "היצירות האהובות ביותר שלנו, שנבחרו על ידי אלפי לקוחות מרוצים",
    productIds: ["prod-1", "prod-5", "prod-9", "prod-13"],
  },
  {
    id: "collection-new-arrivals",
    title: "New Arrivals",
    titleHe: "חדש על המדף",
    description:
      "Fresh from our kitchen — discover our latest creations before everyone else",
    descriptionHe:
      "טרי מהמטבח שלנו — גלו את היצירות החדשות שלנו לפני כולם",
    productIds: ["prod-7", "prod-17"],
  },
  {
    id: "collection-seasonal",
    title: "Seasonal Specials",
    titleHe: "מיוחדים עונתיים",
    description:
      "Limited-time offerings that celebrate the flavors of the season",
    descriptionHe: "מוצרים לזמן מוגבל החוגגים את טעמי העונה",
    productIds: ["prod-12"],
  },
  {
    id: "collection-chefs-picks",
    title: "Chef's Picks",
    titleHe: "בחירת השף",
    description:
      "Hand-selected by our head pastry chef — the creations that make us proudest",
    descriptionHe:
      "נבחרו בקפידה על ידי השף הקונדיטור הראשי שלנו — היצירות שמגאות אותנו ביותר",
    productIds: ["prod-4", "prod-6", "prod-15"],
  },
];
