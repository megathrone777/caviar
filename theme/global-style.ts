import { createGlobalStyle } from "~/theme";

import { base } from "./global/base";
import { reset } from "./global/reset";

const GlobalStyle = createGlobalStyle`
	${reset}
	${base}
`;

export { GlobalStyle };
