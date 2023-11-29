import { Plugin } from "vite";

export function htmlTemplate(map: { [key: string]: string }): Plugin {
  return {
    name: "html-template",
    transformIndexHtml: {
      order: "pre",
      handler: (html: string): string => {
        for (const key in map) {
          html = html.replace(new RegExp(`<% *${key} *%>`, "g"), map[key]);
        }
        return html;
      },
    },
  };
}
