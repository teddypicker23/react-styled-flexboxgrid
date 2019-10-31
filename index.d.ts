declare module "react-styled-flexboxgrid" {
  import { StyledComponent } from "styled-components";

  namespace ReactStyledFlexboxgrid {
    interface ITheme {
      /**
       * rem
       */
      gridSize?: number;
      /**
       * rem
       */
      gutterWidth?: number;
      /**
       * rem
       */
      outerMargin?: number;
      mediaQuery?: string;
      container?: {
        /**
         * rem
         */
        sm?: number;
        /**
         * rem
         */
        md?: number;
        /**
         * rem
         */
        lg?: number;
        /**
         * rem
         */
        xl?: number;
        /**
         * rem
         */
        xxl?: number;
      };
      breakpoints?: {
        /**
         * em
         */
        xs?: number;
        /**
         * em
         */
        sm?: number;
        /**
         * em
         */
        md?: number;
        /**
         * em
         */
        lg?: number;
        /**
         * em
         */
        xl?: number;
        /**
         * em
         */
        xxl?: number;
      };
    }

    interface IGridProps {
      fluid?: boolean;
    }

    interface IRowProps {
      reverse?: boolean;
      start?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
      center?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
      end?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
      top?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
      middle?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
      bottom?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
      around?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
      between?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
      first?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
      last?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
      children?: React.ReactNode;
    }

    interface IColProps {
      reverse?: boolean;
      xs?: boolean | number;
      sm?: boolean | number;
      md?: boolean | number;
      lg?: boolean | number;
      xl?: boolean | number;
      xxl?: boolean | number;
      xsOffset?: number;
      smOffset?: number;
      mdOffset?: number;
      lgOffset?: number;
      xlOffset?: number;
      xxlOffset?: number;
    }
  }

  export type ITheme = ReactStyledFlexboxgrid.ITheme;
  export const Grid: StyledComponent<
    "div",
    any,
    ReactStyledFlexboxgrid.IGridProps,
    never
  >;
  export const Row: StyledComponent<
    "div",
    any,
    ReactStyledFlexboxgrid.IRowProps,
    never
  >;
  export const Col: StyledComponent<
    "div",
    any,
    ReactStyledFlexboxgrid.IColProps,
    never
  >;
}
