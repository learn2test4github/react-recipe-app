import React, { Component } from "react";
import Recipe from "./Recipe";

export default class RecipeList extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <>
        <div className="container py-5">
          {/* title */}
          <div className="row">
            <div className="col-10 mx-auto text-center text-uppercase mb-3">
              <h4 className="text-slanted">recipe list</h4>
            </div>
          </div>
          {/* end of title */}
          <div className="row">
            {recipes.map(recipe => (
              <Recipe key={recipe.recipe_id} recipe={recipe} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
