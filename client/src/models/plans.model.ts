import { ISimpleMap } from "./simple-map.model";
import { IPlan } from "./plan.model";

export interface IPlans {
    plans: ISimpleMap<IPlan>;
}
