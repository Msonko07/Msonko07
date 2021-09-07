<template>
  <v-container
    id="Analyse"
    fluid
    tag="section"
  >
    <v-row>
      <v-col>
        <v-dialog
          v-model="dialog"
          persistent
          max-width="600px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-spacer />
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Hypothèses
            </v-btn>
          </template>
          <v-card>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-select
                      v-model="hypothesis.activity_month_number"
                      :items="hypotheses.activity_month_number"
                      label="Nombre de mois d'activité"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-select
                      v-model="hypothesis.turnover"
                      :items="hypotheses.turnover"
                      item-text="text"
                      item-value="value"
                      label="CA"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-select
                      v-model="hypothesis.estimated_charge"
                      :items="hypotheses.estimated_charge"
                      item-text="text"
                      item-value="value"
                      label="Charges"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-select
                      v-model="hypothesis.salary"
                      :items="hypotheses.salary"
                      item-text="text"
                      item-value="value"
                      label="Salaires"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-select
                      v-model="hypothesis.employer_contribution"
                      :items="hypotheses.employer_contribution"
                      item-text="text"
                      item-value="value"
                      label="Taux de charges patronales"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-select
                      v-model="hypothesis.stock_rotation_times"
                      :items="hypotheses.stock_rotation_times"
                      label="Délais rotation des stocks"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-select
                      v-model="hypothesis.customer_payment_terms"
                      :items="hypotheses.customer_payment_terms"
                      label="Délai règlements clients"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-select
                      v-model="hypothesis.supplier_payment_terms"
                      :items="hypotheses.supplier_payment_terms"
                      label="Délai règlement fournisseurs"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-text-field
                      v-model="hypothesis.days_in_year"
                      :value="hypotheses.days_in_year"
                      label="Nombre de jour dans l'année"
                      disabled
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-select
                      v-model="hypothesis.inflation_rate"
                      :items="hypotheses.inflation_rate"
                      item-text="text"
                      item-value="value"
                      label="Taux d'inflation"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-select
                      v-model="hypothesis.bfr_in_months"
                      :items="hypotheses.bfr_in_months"
                      label="Nombre de mois du BFR"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-select
                      v-model="hypothesis.vat"
                      :items="hypotheses.vat"
                      item-text="text"
                      item-value="value"
                      label="TVA"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-text-field
                      v-model="hypothesis.tax_rate"
                      :value="hypotheses.tax_rate"
                      label="Taux d'imposition"
                      disabled
                    />
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
              >
                Fermer
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog
          v-model="recipientDialog"
          max-width="900px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mx-2"
              color="secondary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Demandeur
            </v-btn>
          </template>
          <recipient-infos
            :recipient="project.recipient"
          />
        </v-dialog>
        <v-dialog
          v-model="projectDialog"
          max-width="900px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mx-2"
              color="secondary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Projet
            </v-btn>
          </template>
          <project-infos
            :project="project"
          />
        </v-dialog>
        <v-dialog
          v-model="financialDialog"
          max-width="900px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mx-2"
              color="secondary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Informations Financières
            </v-btn>
          </template>
          <project-financial-infos
            :financial="project.financial_infos"
          />
        </v-dialog>
        <v-dialog
          v-model="marketDialog"
          max-width="900px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mx-2"
              color="secondary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Informations de marché
            </v-btn>
          </template>
          <project-market-infos
            :market="project.market_infos"
          />
        </v-dialog>
        <!-- analysis comment Dialog -->
        <v-dialog
          v-model="analysisCommentDialog"
          scrollable
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mx-2"
              color="secondary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-icon class="mr-2">
                mdi-comment-text-multiple-outline
              </v-icon>
              Commentaires
            </v-btn>
          </template>
          <analysis-comments
            v-if="analysis"
            :analysis="analysis.id"
            :agent="agent"
            :agents="agents"
          />
        </v-dialog>
        <v-btn
          color="success"
          class="mx-2"
          :disabled="!validateToSaveAnalysis"
          @click="saveAnalysisResult"
        >
          <v-icon class="mr-2">
            mdi-content-save-all
          </v-icon>
          Enregistrer
        </v-btn>
      </v-col>
    </v-row>
    <v-card>
      <v-card-text>
        <v-col
          class="mx-auto"
          cols="12"
          md="11"
        >
          <div class="text-center text-h5 font-weight-light mb-12 pl-0 primary--text">
            Analyse Projet
            <p class="grey--text text-body-2 font-weight-light">
              {{ project.recipient.firstname }} {{ project.recipient.lastname }} : {{ project.entitled }}
            </p>
          </div>

          <base-material-tabs
            v-model="tab"
            background-color="transparent"
            centered
            color="primary"
            icons-and-text
          >
            <v-tab>
              Analyse Qualitative
            </v-tab>
            <v-tab>Investissements Prévus</v-tab>
            <v-tab>Revenu & charges</v-tab>
            <v-tab :disabled="!validateOverallCostOfTheProject">
              Coût Global du Projet
            </v-tab>
            <v-tab :disabled="!validateIncomeStatement">
              Compte de résultat
            </v-tab>
            <v-tab>
              Flux de trésorerie
            </v-tab>
            <v-tab>
              Bilan
            </v-tab>
            <v-tab>
              Ratios
            </v-tab>
            <v-tab>
              REVUE DI
            </v-tab>
            <v-tab>
              REVUE DRE
            </v-tab>
            <v-tab>
              Synthèse & Avis
            </v-tab>

            <v-tabs-items
              v-model="tab"
              class="pt-12 transparent"
            >
              <!-- qualitative analysis item -->
              <v-tab-item>
                <v-card class="mt-0 px-5">
                  <v-card-text>
                    <base-subheading subheading="Analyse Qualitative">
                      <p class="grey--text text-body-2 font-weight-light">
                        More Information here
                      </p>
                    </base-subheading>
                    <!-- Start qualitative analysis form -->
                    <qualitative-analysis-v1
                      :qualitative-value="result_save.qualitative_result"
                      :tag="agent.board.tag"
                      @qualitativeAnalysisUpdate="qualitativeResultUpdated"
                    />
                    <!-- End qualitative analysis form -->
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <!-- planned investment item -->
              <v-tab-item>
                <v-card class="mt-0 px-5">
                  <v-card-text>
                    <base-subheading subheading="Investissements">
                      <p class="grey--text text-body-2 font-weight-light">
                        More Information here
                      </p>
                    </base-subheading>

                    <!-- Start planned investments form -->
                    <planned-investments
                      :investments="(result_save.resized_investments.length) ? result_save.resized_investments : project.financial_infos.investments"
                      :resizing="result_save.resizing_details"
                      @investmentUpdate="investmentUpdated"
                      @amortizationUpdate="amortizationUpdated"
                      @resizedInvestmentsUpdate="resizedInvestmentsUpdated"
                      @resizingDetailsUpdate="resizingDetailsUpdated"
                    />
                    <!-- End of planned investments form -->
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <!-- incomes & expenses item -->
              <v-tab-item>
                <v-card class="mt-0 px-5">
                  <v-card-text>
                    <base-subheading subheading="Revenu & Charges">
                      <p class="grey--text text-body-2 font-weight-light">
                        More Information here
                      </p>
                    </base-subheading>

                    <!-- Start income and expanses form -->
                    <income-and-expenses
                      :turnover="(result_save.turnover.length) ? result_save.turnover : project.financial_infos.turnover"
                      :personal-charges="(result_save.personal_charges.length) ? result_save.personal_charges : project.financial_infos.personal_charges"
                      :production-costs="(result_save.production_costs.length) ? result_save.production_costs : project.financial_infos.production_costs"
                      :external-charges="(result_save.external_charges.length) ? result_save.external_charges : project.financial_infos.external_charges"
                      :resizing="result_save.cost_resizing_details"
                      :hypothesis="hypothesis"
                      @turnoverResultUpdate="turnoverResultUpdated"
                      @personalChargeResultUpdate="personalChargeResultUpdated"
                      @externalChargeResultUpdate="externalChargeResultUpdated"
                      @productionCostResultUpdate="productionCostResultUpdated"
                      @turnoverUpdate="turnoverUpdated"
                      @personalChargesUpdate="personalChargesUpdated"
                      @externalChargesUpdate="externalChargesUpdated"
                      @productionCostsUpdate="productionCostsUpdated"
                      @costResizingDetailsUpdate="costResizingDetailsUpdated"
                    />
                    <!-- End of income and expanses form -->
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <!-- overall cost of the project item -->
              <v-tab-item>
                <v-card class="mt-0 px-5">
                  <v-card-text>
                    <base-subheading subheading="Coût global du projet">
                      <p class="grey--text text-body-2 font-weight-light">
                        More Information here
                      </p>
                    </base-subheading>

                    <!-- Start financial info form -->
                    <overall-cost-of-the-project
                      :total-bfr-to-finance="totalBfrToFinance"
                      :total-investment="totalInvestment.year_1"
                      :contributed-in-bfr="(result_save.amount_contributed_in_bfr) ? result_save.amount_contributed_in_bfr : project.financial_infos.amount_contributed_in_bfr"
                      :contribution-amount="(result_save.investment_contribution_amount) ? result_save.investment_contribution_amount : project.financial_infos.investment_contribution_amount"
                      :capitalization-value="(result_save.capitalization) ? result_save.capitalization : 'non'"
                      :interest-rate-value="(result_save.interest_rate) ? result_save.interest_rate : 5"
                      :duration-value="(result_save.duration) ? result_save.duration : 60"
                      :deadline-value="(result_save.deadline) ? result_save.deadline : 12"
                      :deferred-value="(result_save.deferred) ? result_save.deferred : 6"
                      @deadlineResultUpdate="deadlineResultUpdated"
                      @totalLoanUpdate="totalLoanUpdated"
                      @totalCostUpdate="totalCostUpdated"
                      @totalContributionUpdate="totalContributionUpdated"
                      @capitalizationUpdate="capitalizationUpdated"
                      @interestRateUpdate="interestRateUpdated"
                      @durationUpdate="durationUpdated"
                      @deadlineUpdate="deadlineUpdated"
                      @deferredUpdate="deferredUpdated"
                      @amountContributedInBfrUpdate="amountContributedInBfrUpdated"
                      @investmentContributionAmountUpdate="investmentContributionAmountUpdated"
                    />
                    <!-- End financial infos form -->
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <!-- Income statement item -->
              <v-tab-item>
                <v-card class="mt-0 px-5">
                  <v-card-text>
                    <base-subheading subheading="Compte de résultat">
                      <p class="grey--text text-body-2 font-weight-light">
                        More Information here
                      </p>
                    </base-subheading>

                    <!-- Start income statement form -->
                    <income-statement
                      :hypothesis="hypothesis"
                      :total-monthly-turnover="analysis_result.total_monthly_turnover"
                      :total-monthly-personal="output_result.total_monthly_personal"
                      :total-monthly-external="output_result.total_monthly_external"
                      :total-monthly-cost="analysis_result.total_monthly_cost"
                      :total-amortization="analysis_result.total_amortization"
                      :financial-charges="financial_charges"
                      @turnoverIncomesUpdate="turnoverIncomesUpdated"
                      @productionCostIncomesUpdate="productionCostIncomesUpdated"
                      @grossOperatingSurplusUpdate="grossOperatingSurplusUpdated"
                      @corporateIncomeTaxesUpdate="corporateIncomeTaxesUpdated"
                      @netIncomeUpdate="netIncomeUpdated"
                      @cafUpdate="cafUpdated"
                      @operatingIncomeUpdate="operatingIncomeUpdated"
                      @addedValueUpdate="addedValueUpdated"
                    />
                    <!-- End of income statement form -->
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <!-- Cash flow item -->
              <v-tab-item>
                <v-card class="mt-0 px-5">
                  <v-card-text>
                    <base-subheading subheading="Flux de trésorerie">
                      <p class="grey--text text-body-2 font-weight-light">
                        More Information here
                      </p>
                    </base-subheading>

                    <!-- Start of cash flow form -->
                    <cash-flow
                      :hypothesis="hypothesis"
                      :turnover-incomes="output_result.turnover_incomes"
                      :production-cost-incomes="analysis_result.production_cost_incomes"
                      :gross-operating-surplus="output_result.gross_operating_surplus"
                      :corporate-income-taxes="analysis_result.corporate_income_taxes"
                      :total-investment="totalInvestment"
                      :deadline-result="analysis_result.deadline_result"
                      :total-loan="output_result.total_loan"
                      :total-contribution-amount="output_result.total_contribution_amount"
                      :interest-rate="analysis_result.interest_rate"
                      :net-income="output_result.net_income"
                      :total-amortization="analysis_result.total_amortization"
                      @tradeReceivablesUpdate="tradeReceivablesUpdated"
                      @averageStocksUpdate="averageStocksUpdated"
                      @supplierDebtsUpdate="supplierDebtsUpdated"
                      @finalCashFlowUpdate="finalCashFlowUpdated"
                      @bfrUpdate="bfrUpdated"
                      @vanResultUpdate="vanResultUpdated"
                    />
                    <!-- End of cash flow form -->
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <!-- Forecasted balance sheet item -->
              <v-tab-item>
                <v-card class="mt-0 px-5">
                  <v-card-text>
                    <base-subheading subheading="Bilan prévisionnel">
                      <p class="grey--text text-body-2 font-weight-light">
                        More Information here
                      </p>
                    </base-subheading>

                    <!-- Start of forecasted balance sheet form -->
                    <forecasted-balance-sheet
                      :hypothesis="hypothesis"
                      :investments="totalInvestment"
                      :amortizations="analysis_result.total_amortization"
                      :trade-receivables="analysis_result.trade_receivables"
                      :average-stocks="analysis_result.average_stocks"
                      :deadline-result="analysis_result.deadline_result"
                      :total-contribution-amount="output_result.total_contribution_amount"
                      :supplier-debts="analysis_result.supplier_debts"
                      :net-income="output_result.net_income"
                      :final-cash-flow="analysis_result.final_cash_flow"
                      @fixedAssetsNetUpdate="fixedAssetsNetUpdated"
                      @equityCapitalUpdate="equityCapitalUpdated"
                      @totalActiveUpdate="totalActiveUpdated"
                      @totalLiabilitiesUpdate="totalLiabilitiesUpdated"
                    />
                    <!-- End of forecasted balance sheet form -->
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <!-- Ratio item -->
              <v-tab-item>
                <v-card class="mt-0 px-5">
                  <v-card-text>
                    <base-subheading subheading="Ratio">
                      <p class="grey--text text-body-2 font-weight-light">
                        More Information here
                      </p>
                    </base-subheading>

                    <!-- Start of ratio form -->
                    <ratio
                      :trade-receivables="analysis_result.trade_receivables"
                      :average-stocks="analysis_result.average_stocks"
                      :deadline-result="analysis_result.deadline_result"
                      :supplier-debts="analysis_result.supplier_debts"
                      :fixed-assets-net="analysis_result.fixed_assets_net"
                      :equity-capital="analysis_result.equity_capital"
                      :total-active="analysis_result.total_active"
                      :total-liabilities="analysis_result.total_liabilities"
                      :caf="output_result.caf"
                      :bfr="analysis_result.bfr"
                      :turnover-incomes="output_result.turnover_incomes"
                      :production-cost-incomes="analysis_result.production_cost_incomes"
                      :net-income="output_result.net_income"
                      :gross-operating-surplus="output_result.gross_operating_surplus"
                      :operating-income="analysis_result.operating_income"
                      :added-value="analysis_result.added_value"
                    />
                    <!-- End of ratio form -->
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <!-- Financial review -->
              <v-tab-item>
                <v-card class="mt-0 px-5">
                  <v-card-text>
                    <base-subheading subheading="Fiche de revue">
                      <p class="grey--text text-body-2 font-weight-light">
                        More Information here
                      </p>
                    </base-subheading>

                    <!-- Start of review form -->
                    <financial-review
                      :tag="agent.board.tag"
                      :amount="output_result.total_loan"
                      :review-value="result_save.review"
                      @reviewUpdate="reviewUpdated"
                    />
                    <!-- End of review form -->
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <!-- Risk item -->
              <v-tab-item>
                <v-card class="mt-0 px-5">
                  <v-card-text>
                    <base-subheading subheading="Analyse de risque">
                      <p class="grey--text text-body-2 font-weight-light">
                        More Information here
                      </p>
                    </base-subheading>

                    <!-- Start of risk form -->
                    <risk-analysis
                      :tag="agent.board.tag"
                      :amount="output_result.total_loan"
                      :risk-review-value="result_save.risk_review"
                      @riskReviewUpdate="riskReviewUpdated"
                    />
                    <!-- End of risk form -->
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <!-- Project Notice item -->
              <v-tab-item>
                <v-card class="mt-0 px-5">
                  <v-card-text>
                    <base-subheading subheading="Fiche de synthèse projet">
                      <p class="grey--text text-body-2 font-weight-light">
                        More Information here
                      </p>
                    </base-subheading>

                    <!-- Start of risk form -->
                    <project-notice
                      :project="project"
                      :total-loan="output_result.total_loan"
                      :total-contribution-amount="output_result.total_contribution_amount"
                      :total-cost="output_result.total_cost"
                      :interest-rate="result_save.interest_rate"
                      :duration="result_save.duration"
                      :deadline="result_save.deadline"
                      :deferred="result_save.deferred"
                      :investments="totalInvestment.year_1"
                      :total-bfr-to-finance="totalBfrToFinance"
                      :resizing-details="result_save.resizing_details"
                      :cost-resizing-details="result_save.cost_resizing_details"
                      :total-monthly-personal="output_result.total_monthly_personal"
                      :total-monthly-external="output_result.total_monthly_external"
                      :number-of-employees="parseInt(analysis_result.number_of_employees)"
                      :qualitative="result_save.qualitative_result"
                      :review="result_save.review"
                      :turnover-incomes="output_result.turnover_incomes"
                      :gross-operating-surplus="output_result.gross_operating_surplus"
                      :net-income="output_result.net_income"
                      :caf="output_result.caf"
                      :risk-review="result_save.risk_review"
                    />
                    <!-- End of risk form -->
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </base-material-tabs>
        </v-col>
      </v-card-text>
    </v-card>
    <!-- Loading dialog-->
    <v-dialog
      v-model="loading"
      persistent
      width="300"
    >
      <v-card
        color="secondary"
        dark
      >
        <v-card-text class="white--text text-body-1">
          Veuillez patienter s'il vous plait...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-snackbar
      v-model="snackbarInfos.value"
      :timeout="snackbarInfos.timeout"
      bottom
      right
      :color="snackbarInfos.color"
    >
      {{ snackbarInfos.text }}
    </v-snackbar>
  </v-container>
</template>

<script>
  // import QualitativeAnalysis from '@/views/dashboard/components/forms/QualitativeAnalysis'
  // import AgriculturalAnalysis from '@/views/dashboard/components/forms/AgriculturalAnalysis'
  import QualitativeAnalysisV1 from '@/views/dashboard/components/forms/QualitativeAnalysisV1'
  import PlannedInvestments from '@/views/dashboard/components/forms/PlannedInvestments'
  import IncomeAndExpenses from '@/views/dashboard/components/forms/IncomeAndExpenses'
  import OverallCostOfTheProject from '@/views/dashboard/components/forms/OverallCostOfTheProject'
  import IncomeStatement from '@/views/dashboard/components/forms/IncomeStatement'
  import ForecastedBalanceSheet from '@/views/dashboard/components/forms/ForecastedBalanceSheet'
  import CashFlow from '@/views/dashboard/components/forms/CashFlow'
  import Ratio from '@/views/dashboard/components/forms/Ratio'
  import RiskAnalysis from '@/views/dashboard/components/forms/RiskAnalysis'
  import hypothesis from '@/libraries/hypothesis.json'
  import ProjectNotice from '@/views/dashboard/components/forms/ProjectNotice'
  import RecipientInfos from '@/views/dashboard/component/recipient/recipient'
  import ProjectInfos from '@/views/dashboard/component/recipient/project'
  import ProjectFinancialInfos from '@/views/dashboard/component/recipient/financial'
  import ProjectMarketInfos from '@/views/dashboard/component/recipient/market'
  import AnalysisComments from '@/views/dashboard/component/AnalysisComments'
  import FinancialReview from '@/views/dashboard/components/forms/FinancialReview'
  export default {
    name: 'ProjectAnalysis',
    components: {
      QualitativeAnalysisV1,
      PlannedInvestments,
      IncomeAndExpenses,
      OverallCostOfTheProject,
      IncomeStatement,
      ForecastedBalanceSheet,
      CashFlow,
      Ratio,
      RiskAnalysis,
      ProjectNotice,
      RecipientInfos,
      ProjectInfos,
      ProjectFinancialInfos,
      ProjectMarketInfos,
      AnalysisComments,
      FinancialReview,
    },
    data () {
      return {
        dialog: false,
        recipientDialog: false,
        projectDialog: false,
        financialDialog: false,
        marketDialog: false,
        analysisCommentDialog: false,
        tab: 0,
        tabs: [
          {
            text: 'Analyse Qualitative',
            icon: 'mdi-quality-high',
          },
          {
            text: 'ABE Agricole',
            icon: 'mdi-quality-high',
          },
          {
            text: 'Investissements Prévus',
            icon: 'mdi-handshake',
          },
          {
            text: 'Revenu & charges',
            icon: 'mdi-store',
          },
          {
            text: 'Coût Global du Projet',
            icon: 'mdi-finance',
          },
          {
            text: 'Compte de résultat',
            icon: 'mdi-finance',
          },
          {
            text: 'CFS',
            icon: 'mdi-finance',
          },
          {
            text: 'Bilan',
            icon: 'mdi-finance',
          },
          {
            text: 'Ratios',
            icon: 'mdi-finance',
          },
          {
            text: 'Risque',
            icon: 'mdi-finance',
          },
          {
            text: 'Avis Projet',
            icon: 'mdi-finance',
          },
          {
            text: 'Synthèse analyse',
            icon: 'mdi-finance',
          },
        ],
        actions: [
          {
            color: 'info',
            icon: 'mdi-account',
          },
          {
            color: 'success',
            icon: 'mdi-pencil',
          },
          {
            color: 'error',
            icon: 'mdi-close',
          },
        ],
        hypothesis: hypothesis,
        hypotheses: {
          activity_month_number: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
          turnover: [{ text: '0%', value: '0' }, { text: '1%', value: '0.01' }, { text: '2%', value: '0.02' }, { text: '3%', value: '0.03' }, { text: '4%', value: '0.04' }, { text: '5%', value: '0.05' }],
          estimated_charge: [
            { text: '0%', value: '0' }, { text: '1%', value: '0.01' }, { text: '2%', value: '0.02' }, { text: '3%', value: '0.03' }, { text: '4%', value: '0.04' }, { text: '5%', value: '0.05' },
            { text: '6%', value: '0.06' }, { text: '7%', value: '0.07' }, { text: '8%', value: '0.08' }, { text: '9%', value: '0.09' }, { text: '10%', value: '0.1' },
          ],
          salary: [
            { text: '0%', value: '0' }, { text: '1%', value: '0.01' }, { text: '2%', value: '0.02' }, { text: '3%', value: '0.03' }, { text: '4%', value: '0.04' }, { text: '5%', value: '0.05' },
            { text: '6%', value: '0.06' }, { text: '7%', value: '0.07' }, { text: '8%', value: '0.08' }, { text: '9%', value: '0.09' }, { text: '10%', value: '0.1' },
          ],
          employer_contribution: [
            { text: '0%', value: '0' }, { text: '1%', value: '0.01' }, { text: '2%', value: '0.02' }, { text: '3%', value: '0.03' }, { text: '4%', value: '0.04' }, { text: '5%', value: '0.05' },
            { text: '6%', value: '0.06' }, { text: '7%', value: '0.07' }, { text: '8%', value: '0.08' }, { text: '9%', value: '0.09' }, { text: '10%', value: '0.1' }, { text: '11%', value: '0.11' },
            { text: '12%', value: '0.12' }, { text: '13%', value: '0.13' }, { text: '14%', value: '0.14' }, { text: '15%', value: '0.15' }, { text: '16%', value: '0.16' }, { text: '17%', value: '0.17' },
            { text: '18%', value: '0.18' }, { text: '19%', value: '0.19' }, { text: '20%', value: '0.2' },
          ],
          stock_rotation_times: [
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
            '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
          ],
          customer_payment_terms: [
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
            '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
          ],
          supplier_payment_terms: [
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
            '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
          ],
          days_in_year: '360',
          inflation_rate: [
            { text: '0%', value: '0' }, { text: '1%', value: '0.01' }, { text: '2%', value: '0.02' }, { text: '3%', value: '0.03' }, { text: '4%', value: '0.04' }, { text: '5%', value: '0.05' },
            { text: '6%', value: '0.06' }, { text: '7%', value: '0.07' }, { text: '8%', value: '0.08' }, { text: '9%', value: '0.09' }, { text: '10%', value: '0.1' },
          ],
          discount_rate: [
            { text: '0%', value: '0' }, { text: '1%', value: '0.01' }, { text: '2%', value: '0.02' }, { text: '3%', value: '0.03' }, { text: '4%', value: '0.04' }, { text: '5%', value: '0.05' },
            { text: '6%', value: '0.06' }, { text: '7%', value: '0.07' }, { text: '8%', value: '0.08' }, { text: '9%', value: '0.09' }, { text: '10%', value: '0.1' },
          ],
          vat: [
            { text: '0%', value: '0' }, { text: '1%', value: '0.01' }, { text: '2%', value: '0.02' }, { text: '3%', value: '0.03' }, { text: '4%', value: '0.04' }, { text: '5%', value: '0.05' },
            { text: '6%', value: '0.06' }, { text: '7%', value: '0.07' }, { text: '8%', value: '0.08' }, { text: '9%', value: '0.09' }, { text: '10%', value: '0.1' }, { text: '11%', value: '0.11' },
            { text: '12%', value: '0.12' }, { text: '13%', value: '0.13' }, { text: '14%', value: '0.14' }, { text: '15%', value: '0.15' }, { text: '16%', value: '0.16' }, { text: '17%', value: '0.17' },
            { text: '18%', value: '0.18' }, { text: '19%', value: '0.19' }, { text: '20%', value: '0.2' }, { text: '21%', value: '0.21' }, { text: '22%', value: '0.22' },
            { text: '23%', value: '0.23' }, { text: '24%', value: '0.24' }, { text: '25%', value: '0.25' }, { text: '26%', value: '0.26' }, { text: '27%', value: '0.27' },
            { text: '28%', value: '0.28' }, { text: '29%', value: '0.29' }, { text: '30%', value: '0.30' },
          ],
          tax_rate: '0.3',
          bfr_in_months: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        },
        analysis_result: {
          project_score: 0,
          project_notice: null,
          project_resume: null,
          investments: null,
          amortizations: null,
          total_amortization: null,
          resizing_details: null,
          personal_charges: null,
          total_monthly_personal: 0,
          external_charges: null,
          total_monthly_external: 0,
          turnover: null,
          total_monthly_turnover: 0,
          production_costs: null,
          total_monthly_cost: 0,
          deadline_result: null,
          deadline_amount: 0,
          total_loan: 0,
          total_cost: 0,
          total_contribution_amount: 0,
          interest_rate: 0,
          duration: 0,
          deadline: 0,
          deferred: 0,
          turnover_incomes: null,
          production_cost_incomes: null,
          added_value: null,
          gross_operating_surplus: null,
          operating_income: null,
          corporate_income_taxes: null,
          net_income: null,
          caf: null,
          trade_receivables: null,
          average_stocks: null,
          supplier_debts: null,
          final_cash_flow: null,
          bfr: null,
          fixed_assets_net: null,
          equity_capital: null,
          total_active: null,
          total_liabilities: null,
        },
        result_save: {
          qualitative_result: {},
          resized_investments: [],
          resizing_details: '',
          turnover: [],
          personal_charges: [],
          external_charges: [],
          production_costs: [],
          cost_resizing_details: '',
          capitalization: '',
          interest_rate: 0,
          duration: 0,
          deadline: 0,
          deferred: 0,
          amount_contributed_in_bfr: 0,
          investment_contribution_amount: 0,
          risk_review: {},
          van: null,
          review: {},
        },
        output_result: {
          total_loan: null,
          total_contribution_amount: null,
          total_cost: null,
          total_investments: null,
          total_bfr_to_finance: null,
          total_monthly_personal: null,
          total_monthly_external: null,
          turnover_incomes: null,
          gross_operating_surplus: null,
          net_income: null,
          caf: null,
        },
        events: ['click', 'mousemove', 'mousedown', 'scroll', 'keypress', 'load'],
        warningTimer: null,
        autoSaveTimer: null,
        warningZone: false,
        snackbarInfos: {
          value: false,
          text: '',
          timeout: 5000,
          color: '',
        },
        data_changed: false,
      }
    },
    computed: {
      loading () {
        return this.$store.state.utilities.loading
      },
      agent () {
        return this.$store.state.agents.agent
      },
      agents () {
        return this.$store.state.agents.agents
      },
      project () {
        const id = this.$route.params.projectId
        return this.$store.getters['projects/project'](id)
      },
      analysis () {
        return this.$store.state.analysis.analysis
      },
      totalBfrToFinance () {
        if (this.analysis_result.production_costs && this.analysis_result.external_charges && this.analysis_result.personal_charges) {
          return this.analysis_result.personal_charges.reduce((accumulator, current) => accumulator + current.bfr_to_finance, 0) +
            this.analysis_result.external_charges.reduce((accumulator, current) => accumulator + current.bfr_to_finance, 0) +
            this.analysis_result.production_costs.reduce((accumulator, current) => accumulator + current.bfr_to_finance, 0)
        }
        return 0
      },
      totalInvestment () {
        if (this.analysis_result.investments) {
          return {
            year_1: this.analysis_result.investments.reduce((accumulator, current) => accumulator + current.year_1, 0),
            year_2: this.analysis_result.investments.reduce((accumulator, current) => accumulator + current.year_2, 0),
            year_3: this.analysis_result.investments.reduce((accumulator, current) => accumulator + current.year_3, 0),
            year_4: this.analysis_result.investments.reduce((accumulator, current) => accumulator + current.year_4, 0),
            year_5: this.analysis_result.investments.reduce((accumulator, current) => accumulator + current.year_5, 0),
          }
        }
        return {}
      },
      financial_charges () {
        if (this.analysis_result.deadline_result) {
          return {
            year_1: (this.analysis_result.deadline_result[0]) ? this.analysis_result.deadline_result[0].interest : 0,
            year_2: (this.analysis_result.deadline_result[1]) ? this.analysis_result.deadline_result[1].interest : 0,
            year_3: (this.analysis_result.deadline_result[2]) ? this.analysis_result.deadline_result[2].interest : 0,
            year_4: (this.analysis_result.deadline_result[3]) ? this.analysis_result.deadline_result[3].interest : 0,
            year_5: (this.analysis_result.deadline_result[4]) ? this.analysis_result.deadline_result[4].interest : 0,
          }
        }
        return null
      },
      validateOverallCostOfTheProject () {
        return this.totalBfrToFinance && this.totalInvestment && this.totalInvestment.year_1
      },
      validateIncomeStatement () {
        return this.analysis_result.total_monthly_turnover && this.output_result.total_monthly_personal && this.output_result.total_monthly_external &&
          this.analysis_result.total_monthly_cost && this.analysis_result.total_amortization && this.financial_charges
      },
      validateCashFlow () {
        return this.output_result.turnover_incomes && this.analysis_result.production_cost_incomes &&
          this.output_result.gross_operating_surplus && this.analysis_result.corporate_income_taxes && this.totalInvestment &&
          this.analysis_result.deadline_result && this.output_result.total_loan && this.output_result.total_contribution_amount &&
          this.analysis_result.interest_rate && this.output_result.net_income && this.analysis_result.total_amortization
      },
      validateForecastedBalanceSheet () {
        return this.totalInvestment && this.analysis_result.total_amortization && this.analysis_result.trade_receivables &&
          this.analysis_result.average_stocks && this.analysis_result.deadline_result && this.output_result.total_contribution_amount &&
          this.analysis_result.supplier_debts && this.output_result.net_income && this.analysis_result.final_cash_flow
      },
      validateRatio () {
        return this.analysis_result.trade_receivables && this.analysis_result.average_stocks && this.analysis_result.deadline_result &&
          this.analysis_result.supplier_debts && this.analysis_result.fixed_assets_net && this.analysis_result.equity_capital && this.analysis_result.total_active &&
          this.analysis_result.total_liabilities && this.output_result.caf && this.analysis_result.bfr && this.output_result.turnover_incomes &&
          this.analysis_result.production_cost_incomes && this.output_result.net_income && this.output_result.gross_operating_surplus &&
          this.analysis_result.operating_income && this.analysis_result.added_value
      },
      validateProjectNotice () {
        return this.output_result.total_loan && this.output_result.total_contribution_amount && this.output_result.total_cost &&
          this.result_save.interest_rate && this.result_save.duration && this.result_save.deadline && this.result_save.deferred &&
          this.totalInvestment && this.totalBfrToFinance && this.result_save.resizing_details && this.result_save.cost_resizing_details &&
          this.output_result.total_monthly_personal && this.output_result.total_monthly_external && this.analysis_result.number_of_employees
      },
      validateToSaveAnalysis () {
        return this.validateOverallCostOfTheProject && this.validateIncomeStatement && this.validateCashFlow && this.validateForecastedBalanceSheet && this.validateProjectNotice
      },
    },
    watch: {
      analysis: {
        deep: true,
        handler (val) {
          if (val.analysis && val.analysis.result && val.analysis.result.input && val.analysis.result.input.resized_investments) {
            this.result_save.resized_investments = val.analysis.result.input.resized_investments
          }
          if (val.analysis && val.analysis.result && val.analysis.result.input && val.analysis.result.input.turnover) {
            this.result_save.turnover = val.analysis.result.input.turnover
          }
          if (val.analysis && val.analysis.result && val.analysis.result.input && val.analysis.result.input.personal_charges) {
            this.result_save.personal_charges = val.analysis.result.input.personal_charges
          }
          if (val.analysis && val.analysis.result && val.analysis.result.input && val.analysis.result.input.external_charges) {
            this.result_save.external_charges = val.analysis.result.input.external_charges
          }
          if (val.analysis && val.analysis.result && val.analysis.result.input && val.analysis.result.input.production_costs) {
            this.result_save.production_costs = val.analysis.result.input.production_costs
          }
          if (val.analysis && val.analysis.result && val.analysis.result.input && val.analysis.result.input.resizing_details) {
            this.result_save.resizing_details = val.analysis.result.input.resizing_details
          }
          if (val.analysis && val.analysis.result && val.analysis.result.input && val.analysis.result.input.cost_resizing_details) {
            this.result_save.cost_resizing_details = val.analysis.result.input.cost_resizing_details
          }
          if (val.analysis && val.analysis.result && val.analysis.result.input && val.analysis.result.input.capitalization) {
            this.result_save.capitalization = val.analysis.result.input.capitalization
          }
          if (val.analysis && val.analysis.result && val.analysis.result.input && val.analysis.result.input.deadline) {
            this.result_save.deadline = val.analysis.result.input.deadline
          }
          if (val.analysis && val.analysis.result && val.analysis.result.input && val.analysis.result.input.deferred) {
            this.result_save.deferred = val.analysis.result.input.deferred
          }
          if (val.analysis && val.analysis.result && val.analysis.result.input && val.analysis.result.input.interest_rate) {
            this.result_save.interest_rate = val.analysis.result.input.interest_rate
          }
          if (val.analysis && val.analysis.result && val.analysis.result.input && val.analysis.result.input.duration) {
            this.result_save.duration = val.analysis.result.input.duration
          }
          if (val.analysis && val.analysis.result && val.analysis.result.input && val.analysis.result.input.investment_contribution_amount) {
            this.result_save.investment_contribution_amount = val.analysis.result.input.investment_contribution_amount
          }
          if (val.analysis && val.analysis.result && val.analysis.result.input && val.analysis.result.input.amount_contributed_in_bfr) {
            this.result_save.amount_contributed_in_bfr = val.analysis.result.input.amount_contributed_in_bfr
          }
          if (val.analysis && val.analysis.result && val.analysis.result.input && val.analysis.result.input.qualitative_result) {
            this.result_save.qualitative_result = val.analysis.result.input.qualitative_result
          }
          if (val.analysis && val.analysis.result && val.analysis.result.hypothesis) {
            this.hypothesis = val.analysis.result.hypothesis
          }
          if (val.review && val.review.result) {
            this.result_save.review = val.review.result
          }
          if (val.risk_review && val.risk_review.result) {
            this.result_save.risk_review = val.risk_review.result
          }
          if (val.analysis && val.analysis.result && val.analysis.result.output) {
            this.output_result = val.analysis.result.output
          }
        },
      },
      result_save: {
        deep: true,
        handler (val) {
          this.data_changed = true
        },
      },
      totalInvestment: {
        deep: true,
        handler (val) {
          this.output_result.total_investments = val
        },
      },
      totalBfrToFinance: {
        deep: true,
        handler (val) {
          this.output_result.total_bfr_to_finance = val
        },
      },
    },
    async beforeCreate () {
      const { projectId } = this.$route.params
      await this.$store.dispatch('analysis/fetchAnalysis', projectId)
    },
    mounted () {
      this.events.forEach(event => { window.addEventListener(event, this.resetTimer) })
      this.setTimers()
      window.console.log('mounted')
    },
    destroyed: async function () {
      await this.events.forEach(event => { window.removeEventListener(event, this.resetTimer) })
      await this.resetTimer()
      window.console.log('Destroyed')
    },
    methods: {
      setTimers () {
        this.warningTimer = setTimeout(this.warningMessage, 58 * 1000)
        this.autoSaveTimer = setTimeout(this.autoSave, 60 * 1000)
        this.warningZone = false
      },
      warningMessage () {
        this.warningZone = true
        this.snackbarInfos = {
          value: true,
          text: 'Enregistrement automatique du resultat d\'analyse en cours...',
          timeout: 2000,
          color: 'info',
        }
        // alert('warning')
      },
      async autoSave () {
        if (this.data_changed) {
          await this.saveAnalysisResult()
          this.data_changed = false
        }
      },
      resetTimer () {
        clearTimeout(this.warningTimer)
        clearTimeout(this.autoSaveTimer)
        this.setTimers()
      },
      qualitativeResultUpdated (data) {
        this.result_save.qualitative_result = data
      },
      projectResumeUpdated (data) {
        this.analysis_result.project_resume = data
        this.result_save.project_resume = data
      },
      // Income & expenses details
      turnoverResultUpdated (data) {
        this.analysis_result.turnover = data
        this.analysis_result.total_monthly_turnover = data.reduce((accumulator, current) => accumulator + current.monthly_turnover, 0)
      },
      personalChargeResultUpdated (data) {
        this.analysis_result.personal_charges = data
        this.analysis_result.number_of_employees = data.reduce((accumulator, current) => (current.number_of_employees !== null) ? accumulator + current.number_of_employees : 0, 0)
        this.output_result.total_monthly_personal = data.reduce((accumulator, current) => accumulator + current.monthly_charge, 0)
      },
      externalChargeResultUpdated (data) {
        this.analysis_result.external_charges = data
        this.output_result.total_monthly_external = data.reduce((accumulator, current) => accumulator + current.monthly_charge, 0)
      },
      productionCostResultUpdated (data) {
        this.analysis_result.production_costs = data
        this.analysis_result.total_monthly_cost = data.reduce((accumulator, current) => accumulator + current.monthly_cost, 0)
      },
      turnoverUpdated (data) {
        this.result_save.turnover = data
      },
      personalChargesUpdated (data) {
        this.result_save.personal_charges = data
      },
      externalChargesUpdated (data) {
        this.result_save.external_charges = data
      },
      productionCostsUpdated (data) {
        this.result_save.production_costs = data
      },
      costResizingDetailsUpdated (data) {
        this.result_save.cost_resizing_details = data
      },
      // Planned investments section
      investmentUpdated (data) {
        this.analysis_result.investments = data
      },
      amortizationUpdated (data) {
        this.analysis_result.amortizations = data
        this.analysis_result.total_amortization = {
          year_1: data.reduce((accumulator, current) => accumulator + current.year_1, 0),
          year_2: data.reduce((accumulator, current) => accumulator + current.year_2, 0),
          year_3: data.reduce((accumulator, current) => accumulator + current.year_3, 0),
          year_4: data.reduce((accumulator, current) => accumulator + current.year_4, 0),
          year_5: data.reduce((accumulator, current) => accumulator + current.year_5, 0),
        }
      },
      resizedInvestmentsUpdated (data) {
        this.result_save.resized_investments = data
      },
      resizingDetailsUpdated (data) {
        this.result_save.resizing_details = data
      },
      // Overall cost of the project section
      deadlineResultUpdated (data) {
        this.analysis_result.deadline_result = data
        this.analysis_result.deadline_amount = data[0].deadline
      },
      totalLoanUpdated (data) {
        // this.output_result.total_loan = data
        this.output_result.total_loan = data
      },
      totalCostUpdated (data) {
        this.output_result.total_cost = data
      },
      totalContributionUpdated (data) {
        this.output_result.total_contribution_amount = data
      },
      capitalizationUpdated (data) {
        this.result_save.capitalization = data
      },
      interestRateUpdated (data) {
        this.analysis_result.interest_rate = data
        this.result_save.interest_rate = data
      },
      durationUpdated (data) {
        this.analysis_result.duration = data
        this.result_save.duration = data
      },
      deadlineUpdated (data) {
        this.analysis_result.deadline = data
        this.result_save.deadline = data
      },
      deferredUpdated (data) {
        this.analysis_result.deferred = data
        this.result_save.deferred = data
      },
      amountContributedInBfrUpdated (data) {
        this.result_save.amount_contributed_in_bfr = data
      },
      investmentContributionAmountUpdated (data) {
        this.result_save.investment_contribution_amount = data
      },
      turnoverIncomesUpdated (data) {
        this.output_result.turnover_incomes = data
      },
      productionCostIncomesUpdated (data) {
        this.analysis_result.production_cost_incomes = data
      },
      grossOperatingSurplusUpdated (data) {
        this.output_result.gross_operating_surplus = data
      },
      operatingIncomeUpdated (data) {
        this.analysis_result.operating_income = data
      },
      corporateIncomeTaxesUpdated (data) {
        this.analysis_result.corporate_income_taxes = data
      },
      netIncomeUpdated (data) {
        this.output_result.net_income = data
      },
      cafUpdated (data) {
        this.output_result.caf = data
      },
      tradeReceivablesUpdated (data) {
        this.analysis_result.trade_receivables = data
      },
      averageStocksUpdated (data) {
        this.analysis_result.average_stocks = data
      },
      supplierDebtsUpdated (data) {
        this.analysis_result.supplier_debts = data
      },
      finalCashFlowUpdated (data) {
        this.analysis_result.final_cash_flow = data
      },
      bfrUpdated (data) {
        this.analysis_result.bfr = data
      },
      vanResultUpdated (data) {
        this.result_save.van = data
      },
      fixedAssetsNetUpdated (data) {
        this.analysis_result.fixed_assets_net = data
      },
      equityCapitalUpdated (data) {
        this.analysis_result.equity_capital = data
      },
      totalActiveUpdated (data) {
        this.analysis_result.total_active = data
      },
      totalLiabilitiesUpdated (data) {
        this.analysis_result.total_liabilities = data
      },
      addedValueUpdated (data) {
        this.analysis_result.added_value = data
      },
      riskReviewUpdated (data) {
        this.result_save.risk_review = data
      },
      guaranteeUpdated (data) {
        this.result_save.guarantee = data
      },
      disbursementPlanUpdated (data) {
        this.result_save.disbursement_plan = data
      },
      reviewUpdated (data) {
        this.result_save.review = data
      },
      async saveAnalysisResult () {
        await this.$store.dispatch(
          'analysis/saveAnalysis',
          {
            id: this.analysis.id,
            project: this.analysis.project,
            result: {
              hypothesis: this.hypothesis,
              input: this.result_save,
              output: this.output_result,
            },
            state: (!this.result_save.van) ? 'waiting' : (this.result_save.van > 0) ? 'approved' : 'rejected',
          },
        )
      },
    },
  }
</script>

<style scoped>

</style>
