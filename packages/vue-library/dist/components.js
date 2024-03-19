import { defineContainer } from "./vue-component-lib/utils";
export const AppCart = defineContainer("app-cart", undefined, ["history"]);
export const AppCartItem = defineContainer("app-cart-item", undefined, ["count", "pic", "name", "price"]);
export const AppConfirmed = defineContainer("app-confirmed", undefined, ["history"]);
export const AppHeader = defineContainer("app-header", undefined);
export const AppLayout = defineContainer("app-layout", undefined);
export const AppRoot = defineContainer("app-root", undefined);
export const AppShimmer = defineContainer("app-shimmer", undefined);
export const AppShipping = defineContainer("app-shipping", undefined, ["history"]);
export const AppShippingItem = defineContainer("app-shipping-item", undefined, ["pic", "name", "price", "selectedShippingMethod", "onChangeShippingMethod"]);
//# sourceMappingURL=components.js.map