

interface Dish {
  firstDish?: string;
  secondDish?: string;
  sideDish?: string;
  salad?: string;
  bread?: string;
  mainDish?: string;
  dessert?: string;
  meal?: string;
}

interface Menu {
  dishes: Dish;
  isChecked: boolean;
  count: number;
}

export interface OrderItemProps {
  object: Menu;
  label: string;
}
