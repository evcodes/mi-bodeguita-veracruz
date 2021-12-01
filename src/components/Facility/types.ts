export interface UnitCoordinate {
  rectX: number;
  rectY: number;
  width: number;
  height: number;
  stroke: string;
  fill: string;
  strokeWidth: number;
}

export type UnitCoordinateProps = {
  data: UnitCoordinate;
};
