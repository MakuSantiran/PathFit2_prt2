var items = new Array;
var question;
var answer;
var group;
var picture;

var DontIncludeFromRemix1 = [""];
var DontIncludeFromRemix2 = [""];
var DontIncludeFromRemix3 = ["Formula"];

var identificationMode = false;
var drainBy = -0.005;
var examMode = false;
var PanicMode = false;
var noMusic = true;

//var drainBy = -0.0005;
//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS

//Body Composition//Body Composition//Body Composition//Body Composition
question = ["The fat and nonfat components of the human body"];
answer = ["Body Composition"];
group = "BodyComposition";
picture = "";
items.push({question,answer,group,picture});

question = ["Proportional amount of fat in the body based on the person’s total weight"];
answer = ["Percent Body Fat"];
group = "BodyComposition";
picture = "";
items.push({question,answer,group,picture});

question = ["Body weight without body fat"];
answer = ["Lean Body Mass"];
group = "BodyComposition";
picture = "";
items.push({question,answer,group,picture});

question = ["Body weight at which there seems to be no harm to human health"];
answer = ["Recommended body weight"];
group = "BodyComposition";
picture = "";
items.push({question,answer,group,picture});

question = ["Minimal amount of body fat needed for normal physiological functions"];
answer = ["Essential fat"];
group = "BodyComposition";
picture = "";
items.push({question,answer,group,picture});

question = ["Body fat in excess of essential fat"];
answer = ["Storage fat"];
group = "BodyComposition";
picture = "";
items.push({question,answer,group,picture});

//BodyShapes//BodyShapes//BodyShapes//BodyShapes//BodyShapes//BodyShapes
question = ["Obesity pattern seen in individuals who tend to store fat in the trunk or abdominal area"];
answer = ["Android obesity"];
group = "BodyShape";
picture = "";
items.push({question,answer,group,picture});

question = ["Obesity pattern seen in people who store fat primarily around the hips and thighs"];
answer = ["Gynoid obesity"];
group = "BodyShape";
picture = "";
items.push({question,answer,group,picture});

question = ["Fat deposits located around internal organs linked with greater risk for disease"];
answer = ["Visceral fat"];
group = "BodyShape";
picture = "";
items.push({question,answer,group,picture});

question = ["Fat deposits directly under the skin"];
answer = ["Subcutaneos fat"];
group = "BodyShape";
picture = "";
items.push({question,answer,group,picture});

question = ["Fat deposits in the abdominal cavity behind the peritoneum."];
answer = ["Retroperitoneal fat"];
group = "BodyShape";
picture = "";
items.push({question,answer,group,picture});

//TechniquesToAccessBodyComposition//TechniquesToAccessBodyComposition
question = ["Its a method to assess body composition that uses very low-dose beams of x-ray energy to measure total body fat mass, fat distribution pattern, and bone density","A method that is considered the most accurate of the body composition assessment techniques."];
answer = ["DXA","Dual energy x-ray absorptiometry"];
group = "TechniquesToAccessBodyComposition";
picture = "";
items.push({question,answer,group,picture});

question = ["to assess body composition by calculating the body volume from the air replaced by an individual sitting inside a small chamber."];
answer = ["Hydrostatic weighing"];
group = "TechniquesToAccessBodyComposition";
picture = "";
items.push({question,answer,group,picture});

question = ["Technique to assess body composition by measuring a double thickness of skin at specific body sites"];
answer = ["Skinfold thickness"];
group = "BodyShape";
picture = "";
items.push({question,answer,group,picture});

question = ["Technique to assess body composition by measuring circumferences at specific body sites"];
answer = ["Girth measurements"];
group = "TechniquesToAccessBodyComposition";
picture = "";
items.push({question,answer,group,picture});

question = ["Technique to assess body composition by running a weak electrical current through the body."];
answer = ["Bioelectrical impedance"];
group = "TechniquesToAccessBodyComposition";
picture = "";
items.push({question,answer,group,picture});

//Metrics//Metrics//Metrics//Metrics//Metrics//Metrics//Metrics//Metrics
question = ["Technique to determine thinness and excessive fatness that incorporates height and weight to estimate critical fat values at which the risk for disease increases."];
answer = ["Body Mass Index","BMI"];
group = "Metrics";
picture = "";
items.push({question,answer,group,picture});

question = ["It assesses potential risk for disease based on intra-abdominal fat content."];
answer = ["Waist Circumference"];
group = "Metrics";
picture = "";
items.push({question,answer,group,picture});

question = ["is equally applicable to tall and short persons, used to determine potential risk for disease based on excessive body weight."];
answer = ["Waist to Height Ratio"];
group = "Metrics";
picture = "";
items.push({question,answer,group,picture});

//Formulas//Formulas//Formulas//Formulas//Formulas//Formulas//Formulas
question = ["Formula of FW"];
answer = ["BW*%F"];
group = "Formula";
picture = "";
items.push({question,answer,group,picture});

question = ["Formula of LBM"];
answer = ["BW-FW"];
group = "Formula";
picture = "";
items.push({question,answer,group,picture});

question = ["Formula of RBW"];
answer = ["LBM/(1.0-DFP)"];
group = "Formula";
picture = "";
items.push({question,answer,group,picture});


/*

question = [""];
answer = [""];
group = "Formula";
picture = "";
items.push({question,answer,group,picture});

question = [""];
answer = [""];
group = "Metrics";
picture = "";
items.push({question,answer,group,picture});

question = [""];
answer = [""];
group = "TechniquesToAccessBodyComposition";
picture = "";
items.push({question,answer,group,picture});

question = [""];
answer = [""];
group = "BodyShape";
picture = "";
items.push({question,answer,group,picture});

question = [""];
answer = [""];
group = "BodyComposition";
picture = "";
items.push({question,answer,group,picture});

question = [""];
answer = [""];
group = "Definition";
picture = "";
items.push({question,answer,group,picture});

*/

//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS

function convertSpecialChars(){
	var size = items.length-1;
    console.log(size);
	
    
    for (i= 0; i<=size; i++){
        var question_size = items[i].question.length-1;
        var question_content = items[i].question;
        var answer_size = items[i].answer.length-1;
        var answer_content = items[i].answer;

        
        for (i2=0; i2<=question_size; i2++){
            question_content[i2] = question_content[i2].replace(/'/g,"\u0027");
            question_content[i2] = question_content[i2].replace(/’/g,"\u2019");           
        }
        for (i3=0; i3<=answer_size; i3++){
            //answer_content[i3] =  answer_content[i3].replace(/⟐/g,"\u27D0");
        }

		///array[size] = array[size].replace("'", "\u0027");
	}
    
}