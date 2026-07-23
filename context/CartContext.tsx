"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

export interface CartItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];

  isOpen: boolean;

  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  clearCart: () => void;

  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];

    const stored = localStorage.getItem("cart");

    return stored ? JSON.parse(stored) : [];
  });

  const [isOpen, setIsOpen] = useState(false);

  function updateCart(newItems: CartItem[]) {
    setItems(newItems);

    localStorage.setItem(
      "cart",
      JSON.stringify(newItems)
    );
  }

  function openCart() {
    setIsOpen(true);
  }

  function closeCart() {
    setIsOpen(false);
  }

  function toggleCart() {
    setIsOpen((prev) => !prev);
  }

  function addItem(item: Omit<CartItem, "quantity">) {
    openCart();

    const existing = items.find(
      (i) => i.id === item.id
    );

    if (existing) {
      updateCart(
        items.map((i) =>
          i.id === item.id
            ? {
                ...i,
                quantity: i.quantity + 1,
              }
            : i
        )
      );

      return;
    }

    updateCart([
      ...items,
      {
        ...item,
        quantity: 1,
      },
    ]);
  }

  function removeItem(id: string) {
    updateCart(
      items.filter((i) => i.id !== id)
    );
  }

  function increase(id: string) {
    updateCart(
      items.map((i) =>
        i.id === id
          ? {
              ...i,
              quantity: i.quantity + 1,
            }
          : i
      )
    );
  }

  function decrease(id: string) {
    updateCart(
      items
        .map((i) =>
          i.id === id
            ? {
                ...i,
                quantity: i.quantity - 1,
              }
            : i
        )
        .filter((i) => i.quantity > 0)
    );
  }

  function clearCart() {
    updateCart([]);
  }

  const totalItems = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + item.quantity,
        0
      ),
    [items]
  );

  const totalPrice = useMemo(
    () =>
      items.reduce(
        (sum, item) =>
          sum + item.price * item.quantity,
        0
      ),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,

        isOpen,
        openCart,
        closeCart,
        toggleCart,

        addItem,
        removeItem,
        increase,
        decrease,
        clearCart,

        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}