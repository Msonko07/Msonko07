<template>
  <v-form>
    <v-container fluid>
      <v-row
        align="center"
      >
        <v-col
          sm="12"
          lg="12"
        >
          <v-row>
            <v-col>
              <v-text-field
                v-model="qualitativeAnalysis.projectEntitled"
                label="Intitulé du projet"
                outlined
                dense
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-textarea
                v-model="qualitativeAnalysis.subjectOfTheRequest"
                label="Objet de la demande"
                rows="2"
                outlined
                dense
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="qualitativeAnalysis.amountRequest"
                label="Montant de la demande"
                outlined
                dense
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select
                v-model="qualitativeAnalysis.siteVisit"
                :items="['Oui', 'Non']"
                label="Visite terrain"
                outlined
                dense
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="qualitativeAnalysis.siteVisitComment"
                label="Commentaires (visite terrain)"
                outlined
                dense
              />
            </v-col>
          </v-row>
          <!-- activity -->
          <v-card
            class="px-2 my-1"
            outlined
          >
            <v-card-title class="font-weight-regular text-overline primary--text text-center">
              Profil du (de la) promoteur (trice) ou du (de la) responsable
              <v-spacer />
              <v-icon
                color="primary"
                @click="hide(1)"
              >
                mdi-unfold-more-horizontal
              </v-icon>
            </v-card-title>
            <v-card-text v-show="hidden['1']">
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Activité principale
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitativeAnalysis.mainActivity"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Activité secondaires
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitativeAnalysis.secondaryActivity"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Statut Activité sollicitée
                </v-col>
                <v-col>
                  <v-select
                    v-model="qualitativeAnalysis.statusActivityRequested"
                    :items="['en phase de création', 'en phase d\'extension', 'Reprise d\'activité', 'restructuration (déjà financeé par la DERFJ)']"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Accompagnement ou Formation technique en lien avec l'activité
                </v-col>
                <v-col cols="2">
                  <v-select
                    v-model="qualitativeAnalysis.capacityBuildingCheck"
                    :items="['oui', 'non']"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitativeAnalysis.capacityBuilding"
                    :disabled="qualitativeAnalysis.capacityBuildingCheck === 'non'"
                    label="Si oui, lesquelles"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Nombre d'années d'expérience pratique dans l'activité sollicitée
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitativeAnalysis.practicalExperience"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Formation en gestion
                </v-col>
                <v-col
                  cols="2"
                >
                  <v-select
                    v-model="qualitativeAnalysis.managementTrainingCheck"
                    :items="['oui', 'non']"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitativeAnalysis.managementTraining"
                    :disabled="qualitativeAnalysis.managementTrainingCheck === 'non'"
                    label="Si oui, lesquelles"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Expérience en Autoentreprenariat
                </v-col>
                <v-col cols="2">
                  <v-select
                    v-model="qualitativeAnalysis.selfEmploymentCheck"
                    :items="['oui', 'non']"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitativeAnalysis.selfEmployment"
                    :disabled="qualitativeAnalysis.selfEmploymentCheck === 'non'"
                    label="Si oui, donner le nombre d'année d'expérience"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Temps de Gestion de l'Activité
                </v-col>
                <v-col>
                  <v-select
                    v-model="qualitativeAnalysis.activityManagementTime"
                    :items="['gestion à temps partiel', 'recrutement d\'un gestionnaire', 'A temps plein']"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <!-- Market -->
          <v-card
            class="px-2 my-1"
            outlined
          >
            <v-card-title class="font-weight-regular text-overline primary--text text-center">
              Informations sur le marché
              <v-spacer />
              <v-icon
                color="primary"
                @click="hide(2)"
              >
                mdi-unfold-more-horizontal
              </v-icon>
            </v-card-title>
            <v-card-text v-show="hidden['2']">
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-1"
                >
                  Produits ou Services proposés
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="qualitativeAnalysis.productOrService"
                    rows="2"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-1"
                >
                  Informations sur la clientèle actuelle et/ou visée
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="qualitativeAnalysis.currentCustomerOrTarget"
                    rows="2"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-1"
                >
                  Informations sur la source et le circuit d'approvisionnement
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="qualitativeAnalysis.supplyChain"
                    rows="2"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-1"
                >
                  Informations et appréciation de la Concurrence
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="qualitativeAnalysis.competitionAssessment"
                    rows="2"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-1"
                >
                  Informations sur la stratégie commerciale
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="qualitativeAnalysis.commercialStrategy"
                    rows="2"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-1"
                >
                  Informations sur les canaux de distribution des produits
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="qualitativeAnalysis.distributionChannel"
                    rows="2"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-1"
                >
                  Perspectives d'expansion sur le marché
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="qualitativeAnalysis.marketExpansionProspects"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <!-- Enterprise information -->
          <v-card
            class="px-2 my-1"
            outlined
          >
            <v-card-title class="font-weight-regular text-overline primary--text text-center">
              Informations sur l'entreprise
              <v-spacer />
              <v-icon
                color="primary"
                @click="hide(3)"
              >
                mdi-unfold-more-horizontal
              </v-icon>
            </v-card-title>
            <v-card-text v-show="hidden['3']">
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Capital
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitativeAnalysis.capital"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Actionnariat (Répartition du capital)
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitativeAnalysis.shareholding"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Nombre d'emplois à créer
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitativeAnalysis.numberOfJobsToBeCreated"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Qualification et compétences de l'effectif
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="qualitativeAnalysis.workforceQualification"
                    rows="2"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Disponibilité du site ou du local
                </v-col>
                <v-col cols="2">
                  <v-select
                    v-model="qualitativeAnalysis.siteAvailabilityCheck"
                    :items="['oui', 'non']"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitativeAnalysis.siteAvailability"
                    :disabled="qualitativeAnalysis.siteAvailabilityCheck === 'non'"
                    label="Si oui, précisez le type"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Autorisations déjà obtenues
                </v-col>
                <v-col cols="2">
                  <v-select
                    v-model="qualitativeAnalysis.permitsObtainedCheck"
                    :items="['oui', 'non']"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitativeAnalysis.permitsObtained"
                    :disabled="qualitativeAnalysis.permitsObtainedCheck === 'non'"
                    label="lister si disponible"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Investissements déjà réalisés
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="qualitativeAnalysis.investmentsMade"
                    rows="3"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Montant des investissements déjà réalisé
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitativeAnalysis.amountInvestmentsMade"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Fonds de roulement existant
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitativeAnalysis.existingWorkingCapital"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Charges d'exploitation prises en charge par le promoteur
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="qualitativeAnalysis.assumedOperatingExpenses"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Saisonalité de l'activité
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitativeAnalysis.seasonalityOfTheActivity"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Capacité de production actuelle
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="qualitativeAnalysis.currentProductionCapacity"
                    rows="2"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Appréciation des hypothèses de réalisation et de l'évolution du CA
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="qualitativeAnalysis.turnoverEvolution"
                    rows="3"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Appréciation des charges et de leur évolution
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="qualitativeAnalysis.expensesEvolution"
                    rows="3"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Etats financiers ou Historique des recettes et dépenses
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="qualitativeAnalysis.financialStatement"
                    rows="2"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Vérification des compétences - Description de l'activité étape par étape
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="qualitativeAnalysis.competencyCheck"
                    rows="3"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Acquisition des Compétences techniques requises
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitativeAnalysis.technicalSkills"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Recommandation sur les compétences techniques
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitativeAnalysis.technicalSkillsRecommendation"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Redimensionnement
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitativeAnalysis.resizing"
                    label="Si oui, pourquoi?"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Activité du financement proposé après entretien
                </v-col>
                <v-col>
                  <v-select
                    v-model="qualitativeAnalysis.financingActivity"
                    :items="activities"
                    label="type"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  v-if="qualitativeAnalysis.financingActivity === 'Autres à préciser'"
                >
                  <v-text-field
                    v-model="qualitativeAnalysis.financingActivityPrecision"
                    label="Préciser l'activité"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Montant Proposé après entretien
                </v-col>
                <v-col>
                  <v-select
                    v-model="qualitativeAnalysis.proposedAmount"
                    :items="['moins de 2 millions', 'entre 2 et 5 millions', 'entre 5 et 10 millions', 'plus de 10millions']"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Bailleur (A remplir avant CI)
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitativeAnalysis.lessor"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Projet PAVIE (A remplir par chef de Programme)
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitativeAnalysis.pavieProject"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <!-- technical notice -->
          <v-card
            class="px-2 my-1"
            outlined
          >
            <v-card-title class="font-weight-regular text-overline primary--text text-center">
              Avis technique
              <v-spacer />
              <v-icon
                color="primary"
                @click="hide(4)"
              >
                mdi-unfold-more-horizontal
              </v-icon>
            </v-card-title>
            <v-card-text v-show="hidden['4']">
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Avis technique
                </v-col>
                <v-col>
                  <v-select
                    v-model="qualitativeAnalysis.technicalApprobation"
                    :items="advices"
                    item-value="id"
                    item-text="value"
                    outlined
                    dense
                    label="Avis"
                    :disabled="tag !== 'dex'"
                  />
                  <v-textarea
                    v-model="qualitativeAnalysis.technicalAdvice"
                    label="Avis Technique"
                    outlined
                    dense
                    :disabled="tag !== 'dex'"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Risques identifiés
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="qualitativeAnalysis.identifiedRisk"
                    rows="2"
                    outlined
                    dense
                    :disabled="tag !== 'dex'"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Mitigation des risques
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="qualitativeAnalysis.riskMitigation"
                    rows="2"
                    outlined
                    dense
                    :disabled="tag !== 'dex'"
                  />
                </v-col>
              </v-row>
              <!--<v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text body-2"
                >
                  Avis technique
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="qualitativeAnalysis.n"
                    rows="3"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>-->
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Conditions suspensives
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="qualitativeAnalysis.conditionsPrecedent"
                    rows="2"
                    outlined
                    dense
                    :disabled="tag !== 'dex'"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Recommendations
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="qualitativeAnalysis.recommendations"
                    rows="2"
                    outlined
                    dense
                    :disabled="tag !== 'dex'"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Garanties proposées
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="qualitativeAnalysis.guarantees"
                    rows="2"
                    outlined
                    dense
                    :disabled="tag !== 'dex'"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Plan de décaissement
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-text-field
                    v-for="(item,i) in qualitativeAnalysis.disbursementPlan.length"
                    :key="i"
                    v-model="qualitativeAnalysis.disbursementPlan[i]"
                    class="pt-2"
                    :label="`Décaissement ${i + 1}`"
                    rows="2"
                    outlined
                    dense
                    :disabled="tag !== 'dex'"
                    :append-outer-icon="`${(item > 1) ? 'mdi-close-box' : 'mdi-plus-box'}`"
                    @click:append-outer="`${(item > 1) ? decPlan(i) : incPlan(i)}`"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-row>
            <v-col>
              <v-textarea
                v-model="qualitativeAnalysis.projectResume"
                label="Résumé du projet"
                outlined
                dense
                :disabled="tag !== 'dex'"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    name: 'QualitativeAnalysisV1',
    props: {
      qualitativeValue: {
        type: Object,
        default: null,
      },
      tag: {
        type: String,
        required: true,
      },
    },
    data () {
      return {
        advices: [
          { id: 'waiting', value: 'En cours de traitement' },
          { id: 'rejected', value: 'En attente visite terrain' },
          { id: 'site_visit', value: 'En attente de justificatifs' },
          { id: 'risk_financial', value: 'En attente revue DI et DRE' },
          { id: 'pre_committee', value: 'En attente pré-comité' },
          { id: 'committee', value: 'En attente CI' },
          { id: 'validated_committee', value: 'Validé CI' },
        ],
        result: {},
        hidden: { 1: false, 2: false, 3: false, 4: false },
        activities: [
          'Pêche', 'Transformation', 'Maréyage', 'Micro-Jardinage', 'Pisciculture', 'Poissonnerie', 'Commercialisation',
          'Horticulture', 'Maraichage', 'Arboriculture', 'Agro-Foresterie', 'Cultures Fourragères', 'Grandes cultures', 'Aviculture (Poulet Chair)',
          'Aviculture (Poulette Pondeuse)', 'Apiculture', 'Production Laitière', 'Transformation Laitière', 'Embouche Ovine', 'Embouche Bovine',
          'Porciculture', 'Cuniculture', 'Couture', 'Riziculture', 'Rizerie', 'Autres à préciser',
        ],
        qualitativeAnalysis: {
          projectEntitled: null,
          subjectOfTheRequest: null,
          amountRequest: null,
          siteVisit: null,
          siteVisitComment: null,
          projectResume: null,
          mainActivity: null,
          secondaryActivity: null,
          statusActivityRequested: null,
          capacityBuilding: null,
          capacityBuildingCheck: 'non',
          practicalExperience: null,
          managementTraining: null,
          managementTrainingCheck: 'non',
          selfEmployment: null,
          selfEmploymentCheck: 'non',
          activityManagementTime: null,
          productOrService: null,
          currentCustomerOrTarget: null,
          supplyChain: null,
          competitionAssessment: null,
          commercialStrategy: null,
          distributionChannel: null,
          marketExpansionProspects: null,
          capital: null,
          shareholding: null,
          numberOfJobsToBeCreated: null,
          workforceQualification: null,
          siteAvailability: null,
          siteAvailabilityCheck: 'non',
          permitsObtained: null,
          investmentsMade: null,
          amountInvestmentsMade: null,
          existingWorkingCapital: null,
          assumedOperatingExpenses: null,
          seasonalityOfTheActivity: null,
          currentProductionCapacity: null,
          turnoverEvolution: null,
          expensesEvolution: null,
          financialStatement: null,
          competencyCheck: null,
          technicalSkills: null,
          technicalSkillsRecommendation: null,
          resizing: null,
          financingActivity: null,
          financingActivityPrecision: null,
          proposedAmount: null,
          lessor: null,
          pavieProject: null,
          motivatedOpinion: null,
          technicalApprobation: null,
          technicalAdvice: null,
          identifiedRisk: null,
          riskMitigation: null,
          conditionsPrecedent: null,
          recommendations: null,
          guarantees: null,
          disbursementPlan: [''],
          permitsObtainedCheck: null,
        },
      }
    },
    watch: {
      qualitativeValue: {
        immediate: true,
        deep: true,
        handler (val) {
          if (val instanceof Object && Object.keys(val).length) {
            this.qualitativeAnalysis = val
          }
        },
      },
      qualitativeAnalysis: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('qualitativeAnalysisUpdate', val)
        },
      },
      'qualitativeAnalysis.disbursementPlan': {
        immediate: true,
        handler (val) {
          if (!val.length) {
            this.qualitativeAnalysis.disbursementPlan.push('')
          }
        },
      },
    },
    methods: {
      hide (key) {
        for (const hiddenKey in this.hidden) {
          if (parseInt(hiddenKey) === parseInt(key)) {
            this.hidden[key] = !this.hidden[key]
          } else {
            this.hidden[hiddenKey] = false
          }
        }
      },
      incPlan () {
        this.qualitativeAnalysis.disbursementPlan.push('')
      },
      decPlan (i) {
        this.qualitativeAnalysis.disbursementPlan.splice(i, 1)
      },
    },
  }
</script>
