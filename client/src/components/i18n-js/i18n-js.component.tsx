import React, { memo, useState } from "react";
import i18n from "./i18n-js.helper";

// https://github.com/fnando/i18n-js

const I18nJsComponent: React.FC = () => {
    const [locale, setLocale] = useState(i18n.currentLocale());

    i18n.locale = locale;

    return (
        <>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        setLocale(locale === "ru" ? "en" : "ru");
                    }}
                >
                    Change locale from {locale}
                </button>
            </div>
            <p>{i18n.t("browse")}</p>
            <p>{i18n.t("browse", { locale: "ru" })}</p>
            <p>{i18n.t("complex.prop", { count: 10 })}</p>
            <p>{i18n.t("cancel")}</p>
            <p>{i18n.t("clear")}</p>
        </>
    );
};

export default memo(I18nJsComponent);
