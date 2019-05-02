/**
 * Created by 阿卡琳 on 15/06/2017.
 */
"use strict";
import { h } from "preact";

export const Loading = () => (
    <div className="loading-page">
        <p>
            Loading
            <span className="dot">...</span>
        </p>
        <div className="loading" />
    </div>
);