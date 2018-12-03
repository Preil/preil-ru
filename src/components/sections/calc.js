function enthalpy(tw, ptot) {
    let twk = tw + 273.16;
    const c1 = -7.85951783;
    const c2 = 1.844085259;
    const c3 = -11.7866497;
    const c4 = 22.6807411;
    const c5 = -15.9618719;
    const c6 = 1.89122502;
    const tc = 647.096;
    const pc = 220640;
    const e = 2.71828182846;
    let nu = 1 - twk / tc;

    let pw = Math.pow(e, (tc / twk * (c1 * nu + c2 * Math.pow(nu, 1.5) + c3 * Math.pow(nu, 3) + c4 * Math.pow(nu, 3.5) +
        +c5 * Math.pow(nu, 4) + c6 * Math.pow(nu, 7.5)))) * pc;

    const b = 621.9907;

    let x = b * pw / (ptot - pw);

    let h = tw * (1.01 + 0.00189 * x) + 2.5 * x;

    return h;
};

function kaVL(t1, t2, tw, ptot) {
    let t_air = t1 + t2;
    let h2 = enthalpy(t_air, ptot);
    let h1 = enthalpy(tw, ptot);
}

export {enthalpy, kaVL}
