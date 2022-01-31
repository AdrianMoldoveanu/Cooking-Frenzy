$(document).ready(function () {
  $(".sidenav").sidenav({edge: "right"});
  $(".collapsible").collapsible();
  $("select").formSelect();
  
  validateMaterializeSelect();
  function validateMaterializeSelect() {
      let classValid = { "border-bottom": "1px solid #4caf50", "box-shadow": "0 1px 0 0 #4caf50" };
      let classInvalid = { "border-bottom": "1px solid #f44336", "box-shadow": "0 1px 0 0 #f44336" };
      if ($("select.validate").prop("required")) {
          $("select.validate").css({ "display": "block", "height": "0", "padding": "0", "width": "0", "position": "absolute" });
      }
      $(".select-wrapper input.select-dropdown").on("focusin", function () {
          $(this).parent(".select-wrapper").on("change", function () {
              if ($(this).children("ul").children("li.selected:not(.disabled)").on("click", function () { })) {
                  $(this).children("input").css(classValid);
              }
          });
      }).on("click", function () {
          if ($(this).parent(".select-wrapper").children("ul").children("li.selected:not(.disabled)").css("background-color") === "rgba(0, 0, 0, 0.03)") {
              $(this).parent(".select-wrapper").children("input").css(classValid);
          } else {
              $(".select-wrapper input.select-dropdown").on("focusout", function () {
                  if ($(this).parent(".select-wrapper").children("select").prop("required")) {
                      if ($(this).css("border-bottom") != "1px solid rgb(76, 175, 80)") {
                          $(this).parent(".select-wrapper").children("input").css(classInvalid);
                      }
                  }
              });
          }
      });
  }
});

// Add ingredients //

let ingredient = 1;
let max_ingredients = 20;

$(".add_ingredient").click(function (e) {
  e.preventDefault();
  if (ingredient < max_ingredients) {
    ingredient++;
    $(".list_of_ingredients").append(`
    <div class="input-field col s12">
    <input id="recipe_ingredients${ingredient}" name="recipe_ingredients" type="text" data-length="150" 
      minlength="2" maxlength="150" class="validate" required>
    <label for="recipe_ingredients${ingredient}">Ingredient</label>
    <a type="button" class="red btn-small text-shadow black-text remove_ingredient"><i class="fas fa-minus"></i> Remove ingredient</a></div>`);
  }
});

$("main").on('click', ".remove_ingredient", function () {
  $(this).parent('div').remove();
  ingredient--;
});

// Add preparation steps //

let preparation_step = 1;
let max_preparation_steps = 20;

$(".add_preparation_step").click(function (e) {
  e.preventDefault();
  if (preparation_step < max_preparation_steps) {
    preparation_step++;
    $(".list_of_preparation_steps").append(`
    <div class="input-field col s12">
    <input id="recipe_method${preparation_step}" name="recipe_method" type="text" data-length="500" 
      minlength="5" maxlength="500" class="validate" required>
    <label for="recipe_method${preparation_step}">Preparation step</label>
    <a type="button" class="red btn-small text-shadow black-text remove_preparation_step"><i class="fas fa-minus"></i> Remove step</a></div>`);
  }
});

$("main").on('click', ".remove_preparation_step", function () {
  $(this).parent('div').remove();
  preparation_step--;
});



function sendMail(contactForm) {
  emailjs.send("service_nspvhvv", "Adrian", {
      "from_name": contactForm.name.value,
      "from_email": contactForm.email.value,
      "project_request": contactForm.projectsummary.value
  })
  .then(
      function(response) {
          console.log("SUCCESS", response);
          window.setTimeout(function () {
            location.reload();
          }, 1000);
      },
      function(error) {
          console.log("FAILED", error);
          window.setTimeout(function () {
            location.reload();
          }, 1000);
      }
  );
  return false;  // To block from loading a new page
}