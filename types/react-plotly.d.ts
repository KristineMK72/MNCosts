declare module "react-plotly.js" {
  import * as React from "react";
  import type { Layout, Config, Data } from "plotly.js";

  export interface PlotParams {
    data?: Partial<Data>[];
    layout?: Partial<Layout>;
    config?: Partial<Config>;
    style?: React.CSSProperties;
    className?: string;
    useResizeHandler?: boolean;
    onInitialized?: (...args: any[]) => void;
    onUpdate?: (...args: any[]) => void;
    onPurge?: (...args: any[]) => void;
    onError?: (...args: any[]) => void;
    onRelayout?: (...args: any[]) => void;
    onClick?: (...args: any[]) => void;
    onHover?: (...args: any[]) => void;
    onUnhover?: (...args: any[]) => void;
    onSelected?: (...args: any[]) => void;
    onSelecting?: (...args: any[]) => void;
    onDeselect?: (...args: any[]) => void;
    onLegendClick?: (...args: any[]) => void;
    onLegendDoubleClick?: (...args: any[]) => void;
  }

  export default class Plot extends React.Component<PlotParams> {}
}
