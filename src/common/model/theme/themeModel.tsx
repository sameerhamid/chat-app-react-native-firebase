export class Colors {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
  darkSlate?: string;

  constructor(
    primary: string,
    background: string,
    card: string,
    text: string,
    border: string,
    notification: string,
  ) {
    this.primary = primary;
    this.background = background;
    this.card = card;
    this.text = text;
    this.border = border;
    this.notification = notification;
  }
}

export class ThemeModelItem {
  dark: boolean;
  colors: Colors;
  constructor(dark: boolean, colors: Colors) {
    this.dark = dark;
    this.colors = colors;
  }
}

export class ThemeModel {
  ThemeModel?: ThemeModelItem;
}
