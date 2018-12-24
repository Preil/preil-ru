export default class Ctw {
    constructor(airFlow, waterFlow, range, tw, ptot, c, m, ht, n) {

        this.airFlow = airFlow;
        this.waterFlow = waterFlow;
        this.range = range;
        this.tw = tw;
        this.ptot = ptot;
        this.c = c;
        this.m = m;
        this.ht = ht;
        this.n = n;
    }

    enthalpy(tw, ptot) {
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
    }

    kaVL(t1, t2, tw, ptot) {
        let t_air = (t1 + t2) / 2;
        let h2 = enthalpy(t_air, ptot);
        let h1 = enthalpy(tw, ptot);
        let dh = h2 - h1;
        let step_dh = dh / 5;
        let step_t = (t1 - t2) / 5;

        // alert("h2 = " + h2 + '\n' + "h1 = " + h1);

        let hsa;
        let ha;
        let avg_h = 0;
        let tn;
        for (var i = 0; i <= 5; i++) {
            hsa = enthalpy(t2 + step_t * i, ptot);
            ha = h1 + step_dh * i;
            avg_h = avg_h + 1 / (hsa - ha);
            tn = t2 + step_t + i;

        }
        avg_h = avg_h / 6;
        // alert("avg_h = " + avg_h);
        return avg_h * 4.22 * (t1 - t2);

    }

    kaVL2(t1, t2, t_air, tw, ptot) {
        let h2 = enthalpy(t_air, ptot);
        let h1 = enthalpy(tw, ptot);
        let dh = h2 - h1;
        let step_dh = dh / 5;
        let step_t = (t1 - t2) / 5;

        // alert("h2 = " + h2 + '\n' + "h1 = " + h1);

        let hsa;
        let ha;
        let avg_h = 0;
        let tn;
        for (var i = 0; i <= 5; i++) {
            hsa = enthalpy(t2 + step_t * i, ptot);
            ha = h1 + step_dh * i;
            avg_h = avg_h + 1 / (hsa - ha);
            tn = t2 + step_t + i;
        }
        avg_h = avg_h / 6;
        // alert("avg_h = " + avg_h);
        return avg_h * 4.22 * (t1 - t2);

    }

    lg_kavl(lg_need, kavl_need, r, tw, ptot) {
        let result = [3];
        let d_kavl = 1;
        let d_lg = 1;
        let t2 = tw + 1;
        let t1 = t2 + r;
        const dt_real_air = 2.5;
        let t_air = (t1 + t2) / 2;
        let result_found = false;
        let h2, h1, lg_try, kavl_try;
        while (result_found === false && t2 < 60) {
            h2 = enthalpy(t_air, ptot);
            h1 = enthalpy(tw, ptot);
            lg_try = (h2 - h1) / (4.22 * (t1 - t2));
            kavl_try = kaVL2(t1, t2, t_air, tw, ptot);
            if (Math.abs((kavl_try - kavl_need) / kavl_need) < 0.15 && Math.abs((lg_try - lg_need) / lg_need) < 0.15) {
                while (t_air > (t1 + t2) / 2 - dt_real_air) {
                    if (d_lg + d_kavl > Math.abs(kavl_try - kavl_need) / kavl_need + Math.abs(lg_try - lg_need) / lg_need) {
                        d_lg = Math.abs(lg_try - lg_need) / lg_need;
                        d_kavl = Math.abs(kavl_try - kavl_need) / kavl_need;
                        result[0] = t_air;
                        result[1] = t2;
                        result[2] = kavl_try;
                        result[3] = lg_try;
                    }
                    t_air = t_air - 0.05;
                    h2 = enthalpy(t_air, ptot);
                    lg_try = (h2 - h1) / (4.22 * (t1 - t2));
                    kavl_try = kaVL2(t1, t2, t_air, tw, ptot);
                }
            }
            if (d_kavl < 0.02 && d_lg < 0.02) {
                result_found = true
            }
            t2 = t2 + 0.05;
            t1 = t2 + r;
            t_air = (t1 + t2) / 2;
        }
        return result;
    }

    kavl_lg_fill(c, lg, m, ht, n) {
        return c * Math.pow(lg, m) * Math.pow(ht, n)
    };


}
