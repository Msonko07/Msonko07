<template>
  <v-form
    :disabled="tag !== 'dre'"
  >
    <v-container fluid>
      <v-row
        align="center"
      >
        <v-col
          sm="12"
          lg="12"
        >
          <v-card
            v-if="amount > low_risk && amount < high_risk"
            class="px-5 my-1"
            outlined
          >
            <v-card-title class="font-weight-regular text-overline primary--text text-center">
              Revue projet
              <v-spacer />
              <v-icon
                color="primary"
                @click="hide(1)"
              >
                mdi-unfold-more-horizontal
              </v-icon>
            </v-card-title>
            <v-card-text v-show="hidden['1']">
              <!-- start risk_review section -->
              <v-row>
                <v-col
                  cols="5"
                  class="text-right grey--text text-body-2"
                >
                  Est ce que le profil du(es) promoteur(s) (fomations, expériences) est  adéquat par rapport au projet?
                </v-col>
                <v-col
                  cols="2"
                >
                  <v-select
                    v-model="risk_review.promoterProfile.value"
                    :items="['OK', 'NOK']"
                    label="Check"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="5"
                >
                  <v-text-field
                    v-model="risk_review.promoterProfile.comments"
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="5"
                  class="text-right grey--text text-body-2"
                >
                  Est ce que les besoins de financement sont détaillés?
                </v-col>
                <v-col
                  cols="2"
                >
                  <v-select
                    v-model="risk_review.financingNeeds.value"
                    :items="['OK', 'NOK']"
                    label="Check"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="5"
                >
                  <v-text-field
                    v-model="risk_review.financingNeeds.comments"
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="5"
                  class="text-right grey--text text-body-2"
                >
                  Est ce que la présentation du projet est claire?
                </v-col>
                <v-col
                  cols="2"
                >
                  <v-select
                    v-model="risk_review.projectPresentation.value"
                    :items="['OK', 'NOK']"
                    label="Check"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="5"
                >
                  <v-text-field
                    v-model="risk_review.projectPresentation.comments"
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="5"
                  class="text-right grey--text text-body-2"
                >
                  Vérification du potentiel de marché
                </v-col>
                <v-col
                  cols="2"
                >
                  <v-select
                    v-model="risk_review.marketPotential.value"
                    :items="['OK', 'NOK']"
                    label="Check"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="5"
                >
                  <v-text-field
                    v-model="risk_review.marketPotential.comments"
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="5"
                  class="text-right grey--text text-body-2"
                >
                  Est-ce qu'une vérification des engagements (bancaires) a été effetuée?
                </v-col>
                <v-col
                  cols="2"
                >
                  <v-select
                    v-model="risk_review.engagements.value"
                    :items="['OK', 'NOK']"
                    label="Check"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="5"
                >
                  <v-text-field
                    v-model="risk_review.engagements.comments"
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="5"
                  class="text-right grey--text text-body-2"
                >
                  Est-ce qu'il une analyse de l'historique (CA, RN,Ratios...) a été faite?
                </v-col>
                <v-col
                  cols="2"
                >
                  <v-select
                    v-model="risk_review.historicalAnalysis.value"
                    :items="['OK', 'NOK']"
                    label="Check"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="5"
                >
                  <v-text-field
                    v-model="risk_review.historicalAnalysis.comments"
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="5"
                  class="text-right grey--text text-body-2"
                >
                  Les risques sont-ils identifiés?
                </v-col>
                <v-col
                  cols="2"
                >
                  <v-select
                    v-model="risk_review.identifiedRisks.value"
                    :items="['OK', 'NOK']"
                    label="Check"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="5"
                >
                  <v-text-field
                    v-model="risk_review.identifiedRisks.comments"
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="5"
                  class="text-right grey--text text-body-2"
                >
                  les propositions de mitigation sont elles adéquates?
                </v-col>
                <v-col
                  cols="2"
                >
                  <v-select
                    v-model="risk_review.mitigationProposals.value"
                    :items="['OK', 'NOK']"
                    label="Check"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="5"
                >
                  <v-text-field
                    v-model="risk_review.mitigationProposals.comments"
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="5"
                  class="text-right grey--text text-body-2"
                >
                  les conditions de financement sont elles adaptées?
                </v-col>
                <v-col
                  cols="2"
                >
                  <v-select
                    v-model="risk_review.financingConditions.value"
                    :items="['OK', 'NOK']"
                    label="Check"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="5"
                >
                  <v-text-field
                    v-model="risk_review.financingConditions.comments"
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="5"
                  class="text-right grey--text text-body-2"
                >
                  les garanties proposées sont elles adéquates?
                </v-col>
                <v-col
                  cols="2"
                >
                  <v-select
                    v-model="risk_review.proposedGuarantees.value"
                    :items="['OK', 'NOK']"
                    label="Check"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="5"
                >
                  <v-text-field
                    v-model="risk_review.proposedGuarantees.comments"
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <!-- End risk_review section -->
            </v-card-text>
          </v-card>
          <v-row
            v-if="amount > low_risk && amount < high_risk"
          >
            <v-col>
              <v-textarea
                v-model="risk_review.risk_advice"
                label="Avis risque"
                outlined
                dense
              />
            </v-col>
          </v-row>
          <v-card
            v-if="amount > high_risk"
            class="px-5 my-1"
            outlined
          >
            <v-card-title class="font-weight-regular text-overline primary--text text-center">
              Avis risque
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
                  Avis motivé
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-textarea
                    v-model="risk_review.risk_advice"
                    rows="3"
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Montant (XOF)
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="risk_review.amount"
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
                  Taux d'intérêt
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="risk_review.interest_rate"
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
                  Durée (mois)
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="risk_review.duration"
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
                  Échéance
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-text-field
                    v-model="risk_review.deadline"
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
                  Différé (en mois)
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-text-field
                    v-model="risk_review.deferred"
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
                  Garanties
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-text-field
                    v-model="risk_review.guarantees"
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
                  Plan de décaissement
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-text-field
                    v-for="(item,i) in risk_review.disbursement_plan.length"
                    :key="i"
                    v-model="risk_review.disbursement_plan[i]"
                    class="pt-2"
                    :label="`Décaissement ${i + 1}`"
                    rows="2"
                    outlined
                    dense
                    :append-outer-icon="`${(item > 1) ? 'mdi-close-box' : 'mdi-plus-box'}`"
                    @click:append-outer="`${(item > 1) ? decPlan(i) : incPlan(i)}`"
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
                <v-col
                  cols="8"
                >
                  <v-textarea
                    v-model="risk_review.identified_risk"
                    rows="3"
                    outlined
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
                <v-col
                  cols="8"
                >
                  <v-textarea
                    v-model="risk_review.mitigation_of_risks"
                    rows="3"
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Conditions suspensives
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-textarea
                    v-model="risk_review.conditions_precedent"
                    rows="3"
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Recommandations
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-textarea
                    v-model="risk_review.recommendation"
                    rows="3"
                    outlined
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    name: 'RiskAnalysis',
    props: {
      amount: {
        type: Number,
        required: true,
      },
      riskReviewValue: {
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
        low_risk: 10000000,
        high_risk: 30000000,
        hidden: { 1: false, 2: false, 3: false, 4: false },
        risk_review: {
          promoterProfile: {
            value: null,
            comments: null,
          },
          projectPresentation: {
            value: null,
            comments: null,
          },
          marketPotential: {
            value: null,
            comments: null,
          },
          engagements: {
            value: null,
            comments: null,
          },
          historicalAnalysis: {
            value: null,
            comments: null,
          },
          identifiedRisks: {
            value: null,
            comments: null,
          },
          mitigationProposals: {
            value: null,
            comments: null,
          },
          financingNeeds: {
            value: null,
            comments: null,
          },
          financingConditions: {
            value: null,
            comments: null,
          },
          proposedGuarantees: {
            value: null,
            comments: null,
          },
          risk_advice: null,
          amount: null,
          interest_rate: null,
          duration: null,
          deadline: null,
          deferred: null,
          guarantees: null,
          disbursement_plan: [],
          identified_risk: null,
          mitigation_of_risks: null,
          conditions_precedent: null,
          recommendation: null,
        },
      }
    },
    watch: {
      risk_review: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('riskReviewUpdate', val)
        },
      },
      'risk_review.disbursement_plan': {
        immediate: true,
        handler (val) {
          if (!val.length) {
            this.risk_review.disbursement_plan.push('')
          }
        },
      },
      riskReviewValue: {
        immediate: true,
        deep: true,
        handler (val) {
          if (val !== null && val instanceof Object && Object.keys(val).length) {
            this.risk_review = val
          }
        },
      },
      'risk_review.amount': {
        immediate: true,
        handler (val) {
          if (!val) {
            this.risk_review.amount = this.amount
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
        this.risk_review.disbursement_plan.push('')
      },
      decPlan (i) {
        this.risk_review.disbursement_plan.splice(i, 1)
      },
    },
  }
</script>

<style scoped>

</style>
