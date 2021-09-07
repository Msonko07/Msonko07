<template>
  <v-container
    id="cash-flow"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        sm="12"
        lg="12"
      >
        <base-material-card
          inline
          icon="mdi-cash-100"
          title="TABLEAU DE VARIATION DU BFR"
          class="px-5 py-3"
          color="info"
        >
          <v-simple-table fixed-header>
            <thead>
              <tr>
                <th class="primary--text text-overline">
                  Intitulé
                </th>
                <th class="primary--text text-right text-overline">
                  Année 1
                </th>
                <th class="primary--text text-right text-overline">
                  Année 2
                </th>
                <th class="primary--text text-right text-overline">
                  Année 3
                </th>
                <th class="primary--text text-right text-overline">
                  Année 4
                </th>
                <th class="primary--text text-right text-overline">
                  Année 5
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>CA TTC</td>
                <td class="text-right">
                  {{ ca_all_taxes_included.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ ca_all_taxes_included.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ ca_all_taxes_included.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ ca_all_taxes_included.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ ca_all_taxes_included.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Coûts de production</td>
                <td class="text-right">
                  {{ productionCostIncomes.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ productionCostIncomes.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ productionCostIncomes.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ productionCostIncomes.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ productionCostIncomes.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Acquision d'immobilisation</td>
                <td class="text-right">
                  {{ totalInvestment.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ totalInvestment.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ totalInvestment.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ totalInvestment.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ totalInvestment.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Créances clients</td>
                <td class="text-right">
                  {{ trade_receivables.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ trade_receivables.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ trade_receivables.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ trade_receivables.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ trade_receivables.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Stocks moyens</td>
                <td class="text-right">
                  {{ average_stocks.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ average_stocks.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ average_stocks.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ average_stocks.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ average_stocks.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Dettes fournisseurs</td>
                <td class="text-right">
                  {{ supplier_debts.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ supplier_debts.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ supplier_debts.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ supplier_debts.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ supplier_debts.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>BFR</td>
                <td class="text-right">
                  {{ bfr.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ bfr.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ bfr.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ bfr.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ bfr.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Variation de BFR</td>
                <td class="text-right">
                  {{ change_in_working_capital.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ change_in_working_capital.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ change_in_working_capital.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ change_in_working_capital.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ change_in_working_capital.year_5 | formatNumber }}
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        sm="12"
        lg="12"
      >
        <base-material-card
          inline
          icon="mdi-cash-multiple"
          title="TABLEAU DE FLUX DE TRESORERIE"
          class="px-5 py-3"
          color="info"
        >
          <v-card-actions
            class="blue lighten-2 white--text text-overline"
          >
            <v-spacer />
            Taux d'actualisation : {{ (wacc * 100).toFixed(2) }}%
          </v-card-actions>
          <v-simple-table fixed-header>
            <thead>
              <tr>
                <th class="primary--text text-overline">
                  Intitulé
                </th>
                <th class="primary--text text-right text-overline">
                  Année 1
                </th>
                <th class="primary--text text-right text-overline">
                  Année 2
                </th>
                <th class="primary--text text-right text-overline">
                  Année 3
                </th>
                <th class="primary--text text-right text-overline">
                  Année 4
                </th>
                <th class="primary--text text-right text-overline">
                  Année 5
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Résultat Net</td>
                <td class="text-right">
                  {{ netIncome.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ netIncome.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ netIncome.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ netIncome.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ netIncome.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Dotations aux amortissements</td>
                <td class="text-right">
                  {{ totalAmortization.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ totalAmortization.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ totalAmortization.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ totalAmortization.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ totalAmortization.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Variation de BFR</td>
                <td class="text-right">
                  {{ change_in_working_capital.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ change_in_working_capital.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ change_in_working_capital.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ change_in_working_capital.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ change_in_working_capital.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Cash flow opérationnel</td>
                <td class="text-right">
                  {{ operating_cash_flow.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ operating_cash_flow.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ operating_cash_flow.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ operating_cash_flow.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ operating_cash_flow.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Acquision d'immobilisation</td>
                <td class="text-right">
                  {{ totalInvestment.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ totalInvestment.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ totalInvestment.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ totalInvestment.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ totalInvestment.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Cession d'immobilisation</td>
                <td class="text-right">
                  --
                </td>
                <td class="text-right">
                  --
                </td>
                <td class="text-right">
                  --
                </td>
                <td class="text-right">
                  --
                </td>
                <td class="text-right">
                  --
                </td>
              </tr>
              <tr>
                <td>Cash flow investissement</td>
                <td class="text-right">
                  {{ ((totalInvestment.year_1 > 0) ? -totalInvestment.year_1 : 0) | formatNumber }}
                </td>
                <td class="text-right">
                  {{ ((totalInvestment.year_2 > 0) ? -totalInvestment.year_2 : 0) | formatNumber }}
                </td>
                <td class="text-right">
                  {{ ((totalInvestment.year_3 > 0) ? -totalInvestment.year_3 : 0) | formatNumber }}
                </td>
                <td class="text-right">
                  {{ ((totalInvestment.year_4 > 0) ? -totalInvestment.year_4 : 0) | formatNumber }}
                </td>
                <td class="text-right">
                  {{ ((totalInvestment.year_5 > 0) ? -totalInvestment.year_5 : 0) | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Capital</td>
                <td class="text-right">
                  {{ totalContributionAmount | formatNumber }}
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  0
                </td>
              </tr>
              <tr>
                <td>Dette</td>
                <td class="text-right">
                  {{ deadlineResult[0].rest_of | formatNumber }}
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  0
                </td>
              </tr>
              <tr>
                <td>Remboursement Dette</td>
                <td class="text-right">
                  {{ ((this.deadlineResult[0]) ? deadlineResult[0].principal : 0) | formatNumber }}
                </td>
                <td class="text-right">
                  {{ ((this.deadlineResult[1]) ? deadlineResult[1].principal : 0) | formatNumber }}
                </td>
                <td class="text-right">
                  {{ ((this.deadlineResult[2]) ? deadlineResult[2].principal : 0) | formatNumber }}
                </td>
                <td class="text-right">
                  {{ ((this.deadlineResult[3]) ? deadlineResult[3].principal : 0) | formatNumber }}
                </td>
                <td class="text-right">
                  {{ ((this.deadlineResult[4]) ? deadlineResult[4].principal : 0) | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Cash flow de financement</td>
                <td class="text-right">
                  {{ financing_cash_flow.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ financing_cash_flow.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ financing_cash_flow.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ financing_cash_flow.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ financing_cash_flow.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Free cash flow</td>
                <td class="text-right">
                  {{ free_cash_flow.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ free_cash_flow.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ free_cash_flow.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ free_cash_flow.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ free_cash_flow.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Trésorerie finale</td>
                <td class="text-right">
                  {{ final_cash_flow.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ final_cash_flow.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ final_cash_flow.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ final_cash_flow.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ final_cash_flow.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Cash flow actualisés</td>
                <td class="text-right">
                  {{ discounted_cash_flow.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ discounted_cash_flow.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ discounted_cash_flow.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ discounted_cash_flow.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ discounted_cash_flow.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td colspan="6" />
              </tr>
              <tr>
                <td>Somme des CF actualisés</td>
                <td class="text-right">
                  {{ sum_of_updated_cf | formatNumber }}
                </td>
                <td class="text-right">
                  --
                </td>
                <td class="text-right">
                  --
                </td>
                <td class="text-right">
                  --
                </td>
                <td class="text-right">
                  --
                </td>
              </tr>
              <tr>
                <td>Investissement</td>
                <td class="text-right">
                  {{ totalInvestment.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  --
                </td>
                <td class="text-right">
                  --
                </td>
                <td class="text-right">
                  --
                </td>
                <td class="text-right">
                  --
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>
    </v-row>
    <!-- VAN and IP -->
    <v-card-actions class="blue lighten-2 white--text my-0">
      VAN
      <v-spacer />
      {{ van_result | formatNumber }}
    </v-card-actions>
    <v-divider />
    <v-card-actions class="blue lighten-2 white--text mt-0">
      IP
      <v-spacer />
      {{ ip_result }}
    </v-card-actions>
    <!-- Trésorerie -->
    <!--<v-row>
      <v-col
        sm="12"
        lg="12"
      >
        <base-material-card
          inline
          icon="mdi-cash-register"
          title="Trésorerie"
          class="px-5 py-3"
          color="success"
        >
          <v-simple-table fixed-header>
            <thead>
              <tr>
                <th class="primary--text overline">
                  Intitulé
                </th>
                <th class="primary--text text-right overline">
                  Année 1
                </th>
                <th class="primary--text text-right overline">
                  Année 2
                </th>
                <th class="primary--text text-right overline">
                  Année 3
                </th>
                <th class="primary--text text-right overline">
                  Année 4
                </th>
                <th class="primary--text text-right overline">
                  Année 5
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Trésorerie en début de période</td>
                <td class="text-right">
                  {{ cash_result.begin.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ cash_result.begin.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ cash_result.begin.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ cash_result.begin.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ cash_result.begin.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Trésorerie en fin de période</td>
                <td class="text-right">
                  {{ cash_result.end.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ cash_result.end.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ cash_result.end.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ cash_result.end.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ cash_result.end.year_5 | formatNumber }}
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>
    </v-row>-->
    <v-row>
      <v-col class="text-center">
        <base-material-alert
          :color="`${ (van_result > 0) ? 'success' : 'error' }`"
          dark
        >
          {{ (van_result > 0 ) ? 'BRAVO, VOTRE PROJET EST BIEN RENTABLE' : 'OUPS, REVOYEZ VOS PREVISIONS' }}
        </base-material-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'CashFlow',
    filters: {
      formatNumber (value) {
        if (value !== null) {
          return parseInt(value, 10).toLocaleString('fr-FR')
        } else {
          return '0'
        }
      },
    },
    props: {
      hypothesis: {
        type: Object,
        required: true,
      },
      turnoverIncomes: {
        type: Object,
        required: true,
      },
      productionCostIncomes: {
        type: Object,
        required: true,
      },
      grossOperatingSurplus: {
        type: Object,
        required: true,
      },
      corporateIncomeTaxes: {
        type: Object,
        required: true,
      },
      totalInvestment: {
        type: Object,
        required: true,
      },
      deadlineResult: {
        type: Array,
        required: true,
      },
      totalLoan: {
        type: Number,
        required: true,
      },
      totalContributionAmount: {
        type: Number,
        required: true,
      },
      interestRate: {
        type: Number,
        required: true,
      },
      netIncome: {
        type: Object,
        required: true,
      },
      totalAmortization: {
        type: Object,
        required: true,
      },
    },
    computed: {
      // CA TTC
      ca_all_taxes_included () {
        return {
          year_1: this.turnoverIncomes.year_1 * (1 + parseFloat(this.hypothesis.vat)),
          year_2: this.turnoverIncomes.year_2 * (1 + parseFloat(this.hypothesis.vat)),
          year_3: this.turnoverIncomes.year_3 * (1 + parseFloat(this.hypothesis.vat)),
          year_4: this.turnoverIncomes.year_4 * (1 + parseFloat(this.hypothesis.vat)),
          year_5: this.turnoverIncomes.year_5 * (1 + parseFloat(this.hypothesis.vat)),
        }
      },
      // Créances clients
      trade_receivables () {
        return {
          year_1: this.ca_all_taxes_included.year_1 * parseInt(this.hypothesis.customer_payment_terms) / parseInt(this.hypothesis.days_in_year),
          year_2: this.ca_all_taxes_included.year_2 * parseInt(this.hypothesis.customer_payment_terms) / parseInt(this.hypothesis.days_in_year),
          year_3: this.ca_all_taxes_included.year_3 * parseInt(this.hypothesis.customer_payment_terms) / parseInt(this.hypothesis.days_in_year),
          year_4: this.ca_all_taxes_included.year_4 * parseInt(this.hypothesis.customer_payment_terms) / parseInt(this.hypothesis.days_in_year),
          year_5: this.ca_all_taxes_included.year_5 * parseInt(this.hypothesis.customer_payment_terms) / parseInt(this.hypothesis.days_in_year),
        }
      },
      // Stocks moyens
      average_stocks () {
        return {
          year_1: this.productionCostIncomes.year_1 * parseInt(this.hypothesis.stock_rotation_times) / parseInt(this.hypothesis.days_in_year),
          year_2: this.productionCostIncomes.year_2 * parseInt(this.hypothesis.stock_rotation_times) / parseInt(this.hypothesis.days_in_year),
          year_3: this.productionCostIncomes.year_3 * parseInt(this.hypothesis.stock_rotation_times) / parseInt(this.hypothesis.days_in_year),
          year_4: this.productionCostIncomes.year_4 * parseInt(this.hypothesis.stock_rotation_times) / parseInt(this.hypothesis.days_in_year),
          year_5: this.productionCostIncomes.year_5 * parseInt(this.hypothesis.stock_rotation_times) / parseInt(this.hypothesis.days_in_year),
        }
      },
      // Dettes fournisseurs
      supplier_debts () {
        return {
          year_1: (this.productionCostIncomes.year_1 + this.totalInvestment.year_1) * parseInt(this.hypothesis.supplier_payment_terms) / parseInt(this.hypothesis.days_in_year),
          year_2: (this.productionCostIncomes.year_2 + this.totalInvestment.year_2) * parseInt(this.hypothesis.supplier_payment_terms) / parseInt(this.hypothesis.days_in_year),
          year_3: (this.productionCostIncomes.year_3 + this.totalInvestment.year_3) * parseInt(this.hypothesis.supplier_payment_terms) / parseInt(this.hypothesis.days_in_year),
          year_4: (this.productionCostIncomes.year_4 + this.totalInvestment.year_4) * parseInt(this.hypothesis.supplier_payment_terms) / parseInt(this.hypothesis.days_in_year),
          year_5: (this.productionCostIncomes.year_5 + this.totalInvestment.year_5) * parseInt(this.hypothesis.supplier_payment_terms) / parseInt(this.hypothesis.days_in_year),
        }
      },
      // BFR
      bfr () {
        return {
          year_1: this.trade_receivables.year_1 + this.average_stocks.year_1 - this.supplier_debts.year_1,
          year_2: this.trade_receivables.year_2 + this.average_stocks.year_2 - this.supplier_debts.year_2,
          year_3: this.trade_receivables.year_3 + this.average_stocks.year_3 - this.supplier_debts.year_3,
          year_4: this.trade_receivables.year_4 + this.average_stocks.year_4 - this.supplier_debts.year_4,
          year_5: this.trade_receivables.year_5 + this.average_stocks.year_5 - this.supplier_debts.year_5,
        }
      },
      // Variation du BFR
      change_in_working_capital () {
        return {
          year_1: this.bfr.year_1,
          year_2: this.bfr.year_2 - this.bfr.year_1,
          year_3: this.bfr.year_3 - this.bfr.year_2,
          year_4: this.bfr.year_4 - this.bfr.year_3,
          year_5: this.bfr.year_5 - this.bfr.year_4,
        }
      },
      // Cash flow opérationnel
      operating_cash_flow () {
        // year_1: this.grossOperatingSurplus.year_1 - this.corporateIncomeTaxes.year_1 - this.change_in_working_capital.year_1,
        return {
          year_1: this.netIncome.year_1 + this.totalAmortization.year_1 - this.change_in_working_capital.year_1,
          year_2: this.netIncome.year_2 + this.totalAmortization.year_2 - this.change_in_working_capital.year_2,
          year_3: this.netIncome.year_3 + this.totalAmortization.year_3 - this.change_in_working_capital.year_3,
          year_4: this.netIncome.year_4 + this.totalAmortization.year_4 - this.change_in_working_capital.year_4,
          year_5: this.netIncome.year_5 + this.totalAmortization.year_5 - this.change_in_working_capital.year_5,
        }
      },
      // Cash flow de financement
      financing_cash_flow () {
        return {
          year_1: (this.deadlineResult[0]) ? this.totalContributionAmount + this.deadlineResult[0].rest_of - this.deadlineResult[0].principal : this.totalContributionAmount,
          year_2: (this.deadlineResult[1]) ? -this.deadlineResult[1].principal : 0,
          year_3: (this.deadlineResult[2]) ? -this.deadlineResult[2].principal : 0,
          year_4: (this.deadlineResult[3]) ? -this.deadlineResult[3].principal : 0,
          year_5: (this.deadlineResult[4]) ? -this.deadlineResult[4].principal : 0,
        }
      },
      // Flux de trésorerie disponible
      free_cash_flow () {
        return {
          year_1: this.financing_cash_flow.year_1 - this.totalInvestment.year_1 + this.operating_cash_flow.year_1,
          year_2: this.financing_cash_flow.year_2 - this.totalInvestment.year_2 + this.operating_cash_flow.year_2,
          year_3: this.financing_cash_flow.year_3 - this.totalInvestment.year_3 + this.operating_cash_flow.year_3,
          year_4: this.financing_cash_flow.year_4 - this.totalInvestment.year_4 + this.operating_cash_flow.year_4,
          year_5: this.financing_cash_flow.year_5 - this.totalInvestment.year_5 + this.operating_cash_flow.year_5,
        }
      },
      // Trésorerie final
      final_cash_flow () {
        const result = {}
        result.year_1 = this.free_cash_flow.year_1
        result.year_2 = this.free_cash_flow.year_2 + result.year_1
        result.year_3 = this.free_cash_flow.year_3 + result.year_2
        result.year_4 = this.free_cash_flow.year_4 + result.year_3
        result.year_5 = this.free_cash_flow.year_5 + result.year_4
        // return the final result
        return result
      },
      // Estimation du coût du capital
      wacc () {
        const marketValueOfEquity = this.totalContributionAmount
        const costOfEquity = (0.9 * 0.0923) + 0.063
        const marketValueOfBorrowings = this.totalLoan
        const netCostOfDebt = (this.interestRate / 100) * (1 - parseFloat(this.hypothesis.tax_rate))
        return ((marketValueOfEquity * costOfEquity) / (marketValueOfEquity + marketValueOfBorrowings)) + ((netCostOfDebt * marketValueOfBorrowings) / (marketValueOfEquity + marketValueOfBorrowings))
      },
      // Cash flow actualisés
      discounted_cash_flow () {
        return {
          year_1: this.free_cash_flow.year_1 / (1 + this.wacc),
          year_2: this.free_cash_flow.year_2 / Math.pow((1 + this.wacc), 2),
          year_3: this.free_cash_flow.year_3 / Math.pow((1 + this.wacc), 3),
          year_4: this.free_cash_flow.year_4 / Math.pow((1 + this.wacc), 4),
          year_5: this.free_cash_flow.year_5 / Math.pow((1 + this.wacc), 5),
        }
      },
      // Somme des CF actualisés
      sum_of_updated_cf () {
        return this.discounted_cash_flow.year_1 + this.discounted_cash_flow.year_2 + this.discounted_cash_flow.year_3 + this.discounted_cash_flow.year_4 + this.discounted_cash_flow.year_5
      },
      // Calcul de la VAN
      van_result () {
        return this.sum_of_updated_cf - this.totalInvestment.year_1
      },
      // Calcul de l'IP
      ip_result () {
        return (this.sum_of_updated_cf / this.totalInvestment.year_1).toFixed(2)
      },
      // Trésorerie
      cash_result () {
        const cashAtTheEndOfPeriod = {}
        const cashAtTheBeginningOfPeriod = {}
        // Computation
        cashAtTheBeginningOfPeriod.year_1 = 0
        cashAtTheEndOfPeriod.year_1 = cashAtTheBeginningOfPeriod.year_1 + this.free_cash_flow.year_1
        cashAtTheBeginningOfPeriod.year_2 = cashAtTheEndOfPeriod.year_1
        cashAtTheEndOfPeriod.year_2 = cashAtTheBeginningOfPeriod.year_2 + this.free_cash_flow.year_2
        cashAtTheBeginningOfPeriod.year_3 = cashAtTheEndOfPeriod.year_2
        cashAtTheEndOfPeriod.year_3 = cashAtTheBeginningOfPeriod.year_3 + this.free_cash_flow.year_3
        cashAtTheBeginningOfPeriod.year_4 = cashAtTheEndOfPeriod.year_3
        cashAtTheEndOfPeriod.year_4 = cashAtTheBeginningOfPeriod.year_4 + this.free_cash_flow.year_4
        cashAtTheBeginningOfPeriod.year_5 = cashAtTheEndOfPeriod.year_4
        cashAtTheEndOfPeriod.year_5 = cashAtTheBeginningOfPeriod.year_5 + this.free_cash_flow.year_5
        // Final result
        return {
          begin: cashAtTheBeginningOfPeriod,
          end: cashAtTheEndOfPeriod,
        }
      },
    },
    watch: {
      trade_receivables: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('tradeReceivablesUpdate', val)
        },
      },
      average_stocks: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('averageStocksUpdate', val)
        },
      },
      supplier_debts: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('supplierDebtsUpdate', val)
        },
      },
      final_cash_flow: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('finalCashFlowUpdate', val)
        },
      },
      bfr: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('bfrUpdate', val)
        },
      },
      van_result: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('vanResultUpdate', val)
        },
      },
    },
  }
</script>

<style scoped>

</style>
