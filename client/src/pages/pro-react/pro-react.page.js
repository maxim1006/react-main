import React from "react";
import { TabsComponent } from "../../components/tabs/Tabs";
import Component from "../../components/component/Component";
import ProReactRouterComponent from "../../components/pro-react/router/pro-react-router.component";
import styles from "./pro-react.page.module.scss";

const ProReactPage = () => {
    return (
        <div className={styles.proReactPage}>
            <TabsComponent>
                <div tabName="Router">
                    <Component title="Router">
                        <ProReactRouterComponent />
                    </Component>
                </div>
            </TabsComponent>
        </div>
    );
};

export default ProReactPage;
