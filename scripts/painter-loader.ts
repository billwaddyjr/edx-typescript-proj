import {TypedList} from "./helpers";
import {IPainter} from "./painter";
import $ = require("jquery");

export class PainterLoader {
  constructor(private url: string, private list: TypedList<IPainter>) { }

  load() {
    $.getJSON(this.url,(data) => {
          this.mapData(data);
      });
  }

  mapData(data) {
    if (data) {
      console.log(data)

      // var categories: any[] = data.recipeCategories;
      //
      // Initializer.recipeCategories = new RecipeCategories.RecipeCategories<Interfaces.IRecipeCategory>();
      //
      // var recipeCategoriesSummary = new RecipeCategories.RecipeCategories<Interfaces.IRecipeCategorySummary>()
      //
      // categories.forEach((category) => {
      //     var recipeCategory = new RecipeCategory.RecipeCategory({
      //         name: category.title,
      //         foodGroups: this.getFoodGroups(category),
      //         description: category.details,
      //         examples: this.getExamples(category)
      //     });
      //     Initializer.recipeCategories.items.push(recipeCategory);
      //
      //     var recipeCategorySummary = new RecipeCategorySummary.RecipeCategorySummary({
      //       text: category.title,
      //       title: category.details
      //     });
      //     recipeCategoriesSummary.items.push(recipeCategorySummary);
      //
      // });
      //
      // Initializer.renderer.renderCategories(recipeCategoriesSummary);
    }
  }
}