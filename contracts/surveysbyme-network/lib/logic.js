/**
 * Script file for executing logic to track coffee on the supply chain.
 */ /*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * When a person adds a survey to the blockchain.
 * This creates the survey asset automatically on the blockchain.
 * @param {org.me.survey.addSurvey} newSurvey - the new survey that we create
 * @transaction
 */
async function addSurvey(newSurvey) {
    const participantRegistry = await getParticipantRegistry(
        "org.me.survey.Person"
    );
    var NS = "org.me.survey";
    var survey = getFactory().newResource(NS, "Survey", Math.random().toString(36)
        .substring(3));
    survey.category = newSurvey.category;
    survey.name = newSurvey.name;
    survey.status = newSurvey.status;
    survey.questions = newSurvey.questions;

    const assetRegistry = await getAssetRegistry("org.me.survey.Survey");
    await assetRegistry.add(survey);
    await participantRegistry.update(newSurvey.owner);
}