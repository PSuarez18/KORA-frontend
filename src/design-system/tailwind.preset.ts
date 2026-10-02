import type { Config } from 'tailwindcss';

import { semanticColors } from './tokens/colors';
import { easings } from './tokens/motion';
import { radii, semanticRadii } from './tokens/radii';
import { shadows } from './tokens/shadows';
import { containers, semanticSpacing } from './tokens/spacing';
import {
  editorialFontSizes,
  fluidFontSizes,
  fontFamilies,
  fontSizes,
  letterSpacings,
  lineHeights,
} from './tokens/typography';

/**
 * Traduce los tokens a utilidades de Tailwind. Este es el puente que permite
 * escribir `bg-canvas text-heading rounded-card` en vez de hexcodes sueltos.
 *
 * Si un componente necesita un valor que no está acá, la respuesta correcta es
 * agregar el token, no escribir un arbitrary value.
 */
export const koraPreset = {
  content: [],
  theme: {
    extend: {
      colors: {
        canvas: semanticColors.bg.canvas,
        'canvas-warm': semanticColors.bg.canvasWarm,
        surface: semanticColors.bg.surface,
        'surface-inverse': semanticColors.bg.surfaceInverse,
        'input-inverse': semanticColors.bg.inputInverse,
        'accent-wash': semanticColors.bg.accentWash,
        'accent-sheer': semanticColors.bg.accentSheer,
        'accent-solid': semanticColors.bg.accentSolid,
        glass: semanticColors.bg.glass,
        'glass-panel': semanticColors.bg.glassPanel,
        'icon-wash': semanticColors.bg.iconWash,
        'icon-wash-warm': semanticColors.bg.iconWashWarm,
        'surface-warm': semanticColors.bg.surfaceWarm,
        tile: semanticColors.bg.tile,
        'tile-cool': semanticColors.bg.tileCool,
        chip: semanticColors.bg.chip,
        'surface-sand': semanticColors.bg.surfaceSand,

        heading: semanticColors.text.heading,
        body: semanticColors.text.body,
        accent: semanticColors.accent.primary,
        'accent-soft': semanticColors.accent.soft,
        'accent-mark': semanticColors.accent.mark,
        'on-inverse': semanticColors.text.onInverse,
        'on-inverse-muted': semanticColors.text.onInverseMuted,
        'on-inverse-accent': semanticColors.text.onInverseAccent,
        'on-inverse-warm': semanticColors.text.onInverseWarm,
        placeholder: semanticColors.text.placeholder,
        'icon-cool': semanticColors.text.iconCool,
        'icon-warm': semanticColors.text.iconWarm,
        'accent-bright': semanticColors.text.accentBright,
        'accent-vivid': semanticColors.text.accentVivid,
        /* También como color de fondo: rieles y divisorias de 1–2px (`bg-hairline`). */
        hairline: semanticColors.border.hairline,
        'hairline-inverse': semanticColors.border.hairlineInverse,
        'hairline-soft': semanticColors.border.hairlineSoft,
        steel: semanticColors.text.steel,
      },
      borderColor: {
        subtle: semanticColors.border.subtle,
        card: semanticColors.border.card,
        peach: semanticColors.border.peach,
        tile: semanticColors.border.tile,
        'tile-cool': semanticColors.border.tileCool,
        ink: semanticColors.border.ink,
        inverse: semanticColors.border.inverse,
        glass: semanticColors.border.glass,
        hairline: semanticColors.border.hairline,
        'hairline-inverse': semanticColors.border.hairlineInverse,
      },
      backgroundImage: {
        'glow-hero': semanticColors.glow.hero,
        'glow-left': semanticColors.glow.sectionLeft,
        'glow-right': semanticColors.glow.sectionRight,
        'glow-contact': semanticColors.glow.contactAmber,
        'glow-contact-steel': semanticColors.glow.contactSteel,
      },
      fontFamily: {
        display: [...fontFamilies.display],
        sans: [...fontFamilies.body],
        mono: [...fontFamilies.mono],
        reading: [...fontFamilies.reading],
      },
      fontSize: {
        ...fontSizes,
        'fluid-hero': fluidFontSizes.hero,
        'fluid-section': fluidFontSizes.sectionTitle,
        'fluid-section-sm': fluidFontSizes.sectionTitleSm,
        'fluid-unit': fluidFontSizes.unitTitle,
        'fluid-contact': fluidFontSizes.contactTitle,
        'fluid-eyebrow': fluidFontSizes.eyebrow,
        'fluid-page-title': fluidFontSizes.pageTitle,
        'fluid-section-lg': fluidFontSizes.sectionTitleLg,
        ...editorialFontSizes,
      },
      lineHeight: lineHeights,
      letterSpacing: letterSpacings,
      borderRadius: {
        ...radii,
        button: semanticRadii.button,
        pill: semanticRadii.pill,
        card: semanticRadii.card,
        panel: semanticRadii.panel,
        media: semanticRadii.media,
        input: semanticRadii.input,
        avatar: semanticRadii.avatar,
        'card-soft': semanticRadii.cardSoft,
        tile: semanticRadii.tile,
        sharp: semanticRadii.sharp,
      },
      boxShadow: {
        'card-rest': shadows.cardRest,
        'card-hover': shadows.cardHover,
        panel: shadows.panel,
        nav: shadows.nav,
        'accent-glow': shadows.accentGlow,
        focus: shadows.focusRing,
      },
      spacing: {
        'section-y': semanticSpacing.sectionY,
        'section-y-tight': semanticSpacing.sectionYTight,
        gutter: semanticSpacing.gutter,
        'heading-gap': semanticSpacing.headingGap,
        'card-gap': semanticSpacing.cardGap,
        'card-padding': semanticSpacing.cardPadding,
        'hero-card-inset': semanticSpacing.heroCardInset,
        'card-gutter': semanticSpacing.cardGutter,
        'nav-rest': semanticSpacing.navRestOffset,
        'page-hero': semanticSpacing.pageHeroTop,
        'article-top': semanticSpacing.articleTop,
        'page-tail': semanticSpacing.pageTail,
        'contact-top': semanticSpacing.contactTop,
        'contact-bottom': semanticSpacing.contactBottom,
      },
      maxWidth: {
        container: containers.default,
        narrow: containers.narrow,
        article: containers.article,
        nav: containers.nav,
        wide: containers.wide,
      },
      transitionTimingFunction: {
        out: easings.cssOut,
        'in-out': easings.cssInOut,
      },
    },
  },
  plugins: [],
} satisfies Config;
