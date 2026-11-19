import { createContext, useState } from "react";

type ThemeContextType = {
  theme?: "light" | "dark";
  toggleTheme?: () => void;
};
type ThemeContextProps = {
  children?: React.ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({});

export function ThemeContextProvider({ children }: ThemeContextProps) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
