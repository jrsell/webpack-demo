export type ClientConfig = {
    PORT: string;
    DOMAIN: number;
};
declare const __CONFIG__: ClientConfig;

/* The following gets replaced by webpack during compile */
export const config: ClientConfig = __CONFIG__;