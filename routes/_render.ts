import { RenderContext, RenderFn } from "$fresh/server.ts";
import { config } from "$root/twind.config.ts";
import { setup } from "$twind";
import { virtualSheet } from "$twind/sheets";

const sheet = virtualSheet();
sheet.reset();
setup({ ...config, sheet });

export function render(ctx: RenderContext, render: RenderFn) {
  const snapshot = ctx.state.get("twindSnapshot") as unknown[] | null;
  sheet.reset(snapshot || undefined);
  render();
  ctx.styles.splice(0, ctx.styles.length, ...(sheet).target);
  const newSnapshot = sheet.reset();
  ctx.state.set("twindSnapshot", newSnapshot);
}
