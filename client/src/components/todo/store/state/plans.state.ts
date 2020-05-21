import { IPlan } from "../../../../models/plan.model";
import { ISimpleMap } from "../../../../models/simple-map.model";
import { IError } from "../../../../models/error.model";

export interface PlansState extends IError {
    isLoading: boolean;
    plans: ISimpleMap<IPlan>;
}
