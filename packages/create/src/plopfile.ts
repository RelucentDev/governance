/**
 * Relucent Generators.
 *
 * @since     1.0.0
 * @copyright 2023 Relucent Ltd
 * @author    Relucent Ltd <hello@relucent.dev>
 * @see       https://relucent.dev
 */
import acknowledgements from "./acknowledgements/index.js";
import readme from "./readme/index.js";
import { NodePlopAPI } from "plop";
import pluralize from "pluralize";
import title from "title";

export default function (plop: NodePlopAPI) {
  // Plop Config
  plop.setWelcomeMessage("@relucent.dev/generators");
  plop.setHelper("pluralize", (text: string) => pluralize(text));
  plop.setHelper("titleCase", (text: string) => title(text));
  plop.setHelper("inArray", (array: string[], value: string) =>
    array.includes(value),
  );

  // Generators
  acknowledgements(plop);
  readme(plop);
}
