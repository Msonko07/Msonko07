<template>
  <v-container
    id="ratio"
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
          title="RATIO"
          class="px-5 py-3"
          color="info"
        >
          <v-simple-table fixed-header>
            <thead>
              <tr>
                <th class="primary--text text-overline">
                  Type
                </th>
                <th class="primary--text text-overline">
                  NOMINATION
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
                <td
                  rowspan="3"
                  class="text--primary text-overline"
                >
                  Ratios d'équilibre financier
                </td>
                <td>
                  Besoin en fonds de roulement
                </td>
                <td class="text-right">
                  {{ working_capital_requirements.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ working_capital_requirements.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ working_capital_requirements.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ working_capital_requirements.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ working_capital_requirements.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Fonds de roulement</td>
                <td class="text-right">
                  {{ working_capital.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ working_capital.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ working_capital.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ working_capital.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ working_capital.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Trésorerie</td>
                <td class="text-right">
                  {{ treasuries.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ treasuries.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ treasuries.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ treasuries.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ treasuries.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td colspan="7" />
              </tr>
              <tr>
                <td
                  rowspan="8"
                  class="text--primary text-overline"
                >
                  Ratios de structure
                </td>
                <td>
                  Ratio d'autonomie financière
                </td>
                <td class="text-right">
                  {{ financial_autonomy_ratio.year_1.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ financial_autonomy_ratio.year_2.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ financial_autonomy_ratio.year_3.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ financial_autonomy_ratio.year_4.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ financial_autonomy_ratio.year_5.toFixed(3) }}
                </td>
              </tr>
              <tr>
                <td>Ratio d'indépendance financière</td>
                <td class="text-right">
                  {{ financial_independence_ratio.year_1.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ financial_independence_ratio.year_2.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ financial_independence_ratio.year_3.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ financial_independence_ratio.year_4.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ financial_independence_ratio.year_5.toFixed(3) }}
                </td>
              </tr>
              <tr>
                <td>Ratio de liquidité de l'actif</td>
                <td class="text-right">
                  {{ asset_liquidity_ratio.year_1.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ asset_liquidity_ratio.year_2.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ asset_liquidity_ratio.year_3.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ asset_liquidity_ratio.year_4.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ asset_liquidity_ratio.year_5.toFixed(3) }}
                </td>
              </tr>
              <tr>
                <td>Ratio de financement  de l'immobilisation</td>
                <td class="text-right">
                  {{ capital_asset_financing_ratio.year_1.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ capital_asset_financing_ratio.year_2.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ capital_asset_financing_ratio.year_3.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ capital_asset_financing_ratio.year_4.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ capital_asset_financing_ratio.year_5.toFixed(3) }}
                </td>
              </tr>
              <tr>
                <td>Solvabilité  ou taux de couverture du risque global</td>
                <td class="text-right">
                  {{ solvency.year_1.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ solvency.year_2.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ solvency.year_3.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ solvency.year_4.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ solvency.year_5.toFixed(3) }}
                </td>
              </tr>
              <tr>
                <td>Taux d'endettement</td>
                <td class="text-right">
                  {{ debt_ratio.year_1.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ debt_ratio.year_2.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ debt_ratio.year_3.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ debt_ratio.year_4.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ debt_ratio.year_5.toFixed(3) }}
                </td>
              </tr>
              <tr>
                <td>Capacité de remboursement</td>
                <td class="text-right">
                  {{ repayment_capacity.year_1.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ repayment_capacity.year_2.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ repayment_capacity.year_3.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ repayment_capacity.year_4.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ repayment_capacity.year_5.toFixed(3) }}
                </td>
              </tr>
              <tr>
                <td>Ratio de couverture des capitaux investis</td>
                <td class="text-right">
                  {{ invested_capital_coverage_ratio.year_1.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ invested_capital_coverage_ratio.year_2.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ invested_capital_coverage_ratio.year_3.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ invested_capital_coverage_ratio.year_4.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ invested_capital_coverage_ratio.year_5.toFixed(3) }}
                </td>
              </tr>
              <tr>
                <td colspan="7" />
              </tr>
              <tr>
                <td
                  rowspan="2"
                  class="text--primary text-overline"
                >
                  Ratios de liquidité
                </td>
                <td>
                  Ratio de liquidité générale
                </td>
                <td class="text-right">
                  {{ general_liquidity_ratio.year_1.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ general_liquidity_ratio.year_2.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ general_liquidity_ratio.year_3.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ general_liquidity_ratio.year_4.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ general_liquidity_ratio.year_5.toFixed(3) }}
                </td>
              </tr>
              <tr>
                <td>Ratio de liquidité gratuite</td>
                <td class="text-right">
                  {{ free_liquidity_ratio.year_1.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ free_liquidity_ratio.year_2.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ free_liquidity_ratio.year_3.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ free_liquidity_ratio.year_4.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ free_liquidity_ratio.year_5.toFixed(3) }}
                </td>
              </tr>
              <tr>
                <td colspan="7" />
              </tr>
              <tr>
                <td
                  rowspan="3"
                  class="text--primary text-overline"
                >
                  Ratios de délais
                </td>
                <td>
                  Rotation clients
                </td>
                <td class="text-right">
                  {{ customers_rotation.year_1.toFixed(2) }}
                </td>
                <td class="text-right">
                  {{ customers_rotation.year_2.toFixed(2) }}
                </td>
                <td class="text-right">
                  {{ customers_rotation.year_3.toFixed(2) }}
                </td>
                <td class="text-right">
                  {{ customers_rotation.year_4.toFixed(2) }}
                </td>
                <td class="text-right">
                  {{ customers_rotation.year_5.toFixed(2) }}
                </td>
              </tr>
              <tr>
                <td>Fournisseur</td>
                <td class="text-right">
                  {{ suppliers_rotation.year_1.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ suppliers_rotation.year_2 }}
                </td>
                <td class="text-right">
                  {{ suppliers_rotation.year_3 }}
                </td>
                <td class="text-right">
                  {{ suppliers_rotation.year_4 }}
                </td>
                <td class="text-right">
                  {{ suppliers_rotation.year_5 }}
                </td>
              </tr>
              <tr>
                <td>Rotation de stocks</td>
                <td class="text-right">
                  {{ stocks_rotation.year_1 }}
                </td>
                <td class="text-right">
                  {{ stocks_rotation.year_2 }}
                </td>
                <td class="text-right">
                  {{ stocks_rotation.year_3 }}
                </td>
                <td class="text-right">
                  {{ stocks_rotation.year_4 }}
                </td>
                <td class="text-right">
                  {{ stocks_rotation.year_5 }}
                </td>
              </tr>
              <tr>
                <td colspan="7" />
              </tr>
              <tr>
                <td
                  rowspan="10"
                  class="text--primary text-overline"
                >
                  Ratios de Rentabilité
                </td>
                <td>
                  Rentabilité globale
                </td>
                <td class="text-right">
                  {{ overall_profitability.year_1.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ overall_profitability.year_2.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ overall_profitability.year_3.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ overall_profitability.year_4.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ overall_profitability.year_5.toFixed(3) }}
                </td>
              </tr>
              <tr>
                <td>Rentabilité financiere</td>
                <td class="text-right">
                  {{ financial_profitability.year_1.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ financial_profitability.year_2.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ financial_profitability.year_3.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ financial_profitability.year_4.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ financial_profitability.year_5.toFixed(3) }}
                </td>
              </tr>
              <tr>
                <td>Ratio de valeur ajoutée</td>
                <td class="text-right">
                  {{ value_added_ratio.year_1.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ value_added_ratio.year_2.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ value_added_ratio.year_3.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ value_added_ratio.year_4.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ value_added_ratio.year_5.toFixed(3) }}
                </td>
              </tr>
              <tr>
                <td>Capacité d'autofinancement</td>
                <td class="text-right">
                  {{ self_financing_capacity.year_1.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ self_financing_capacity.year_2.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ self_financing_capacity.year_3.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ self_financing_capacity.year_4.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ self_financing_capacity.year_5.toFixed(3) }}
                </td>
              </tr>
              <tr>
                <td>Ratio de CAF</td>
                <td class="text-right">
                  {{ caf_ratio.year_1.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ caf_ratio.year_2.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ caf_ratio.year_3.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ caf_ratio.year_4.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ caf_ratio.year_5.toFixed(3) }}
                </td>
              </tr>
              <tr>
                <td>Autofinancement</td>
                <td class="text-right">
                  {{ self_financing.year_1.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ self_financing.year_2.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ self_financing.year_3.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ self_financing.year_4.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ self_financing.year_5.toFixed(3) }}
                </td>
              </tr>
              <tr>
                <td>Taux marge brute sur matieres premieres</td>
                <td class="text-right">
                  -
                </td>
                <td class="text-right">
                  -
                </td>
                <td class="text-right">
                  -
                </td>
                <td class="text-right">
                  -
                </td>
                <td class="text-right">
                  -
                </td>
              </tr>
              <tr>
                <td>Taux de marge brute sur marchandises</td>
                <td class="text-right">
                  -
                </td>
                <td class="text-right">
                  -
                </td>
                <td class="text-right">
                  -
                </td>
                <td class="text-right">
                  -
                </td>
                <td class="text-right">
                  -
                </td>
              </tr>
              <tr>
                <td>Taux de marge brute d'exploitation</td>
                <td class="text-right">
                  {{ gross_operating_margin.year_1.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ gross_operating_margin.year_2.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ gross_operating_margin.year_3.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ gross_operating_margin.year_4.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ gross_operating_margin.year_5.toFixed(3) }}
                </td>
              </tr>
              <tr>
                <td>Ratio de marge brute d'exploitation</td>
                <td class="text-right">
                  {{ gross_operating_margin_ratio.year_1.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ gross_operating_margin_ratio.year_2.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ gross_operating_margin_ratio.year_3.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ gross_operating_margin_ratio.year_4.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ gross_operating_margin_ratio.year_5.toFixed(3) }}
                </td>
              </tr>
              <tr>
                <td colspan="7" />
              </tr>
              <tr>
                <td
                  rowspan="3"
                  class="text--primary text-overline"
                >
                  Ratio effet de levier
                </td>
                <td>
                  Effet de levier de l'actif
                </td>
                <td class="text-right">
                  {{ asset_leverage.year_1.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ asset_leverage.year_2.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ asset_leverage.year_3.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ asset_leverage.year_4.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ asset_leverage.year_5.toFixed(3) }}
                </td>
              </tr>
              <tr>
                <td>Effet de levier des emprunts avec interets</td>
                <td class="text-right">
                  {{ leverage_interest_bearing_borrowings.year_1.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ leverage_interest_bearing_borrowings.year_2.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ leverage_interest_bearing_borrowings.year_3.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ leverage_interest_bearing_borrowings.year_4.toFixed(3) }}
                </td>
                <td class="text-right">
                  {{ leverage_interest_bearing_borrowings.year_5.toFixed(3) }}
                </td>
              </tr>
              <tr>
                <td>Effet de levier de la dette </td>
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
                <td class="text-right">
                  0
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Ratio',
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
      tradeReceivables: {
        type: Object,
        required: true,
      },
      averageStocks: {
        type: Object,
        required: true,
      },
      deadlineResult: {
        type: Array,
        required: true,
      },
      supplierDebts: {
        type: Object,
        required: true,
      },
      fixedAssetsNet: {
        type: Object,
        required: true,
      },
      equityCapital: {
        type: Object,
        required: true,
      },
      totalActive: {
        type: Object,
        required: true,
      },
      totalLiabilities: {
        type: Object,
        required: true,
      },
      caf: {
        type: Object,
        required: true,
      },
      bfr: {
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
      netIncome: {
        type: Object,
        required: true,
      },
      grossOperatingSurplus: {
        type: Object,
        required: true,
      },
      operatingIncome: {
        type: Object,
        required: true,
      },
      addedValue: {
        type: Object,
        required: true,
      },
    },
    computed: {
      // Besoin en fon de roulement
      working_capital_requirements () {
        const result = {}
        result.year_1 = this.averageStocks.year_1 + this.tradeReceivables.year_1 - this.supplierDebts.year_1
        result.year_2 = this.averageStocks.year_2 + this.tradeReceivables.year_2 - this.supplierDebts.year_2
        result.year_3 = this.averageStocks.year_3 + this.tradeReceivables.year_3 - this.supplierDebts.year_3
        result.year_4 = this.averageStocks.year_4 + this.tradeReceivables.year_4 - this.supplierDebts.year_4
        result.year_5 = this.averageStocks.year_5 + this.tradeReceivables.year_5 - this.supplierDebts.year_5

        return result
      },
      // Fond de roulement
      working_capital () {
        const result = {}
        result.year_1 = this.equityCapital.year_1 + (this.deadlineResult[1] ? this.deadlineResult[1].rest_of : 0) - this.fixedAssetsNet.year_1
        result.year_2 = this.equityCapital.year_2 + (this.deadlineResult[2] ? this.deadlineResult[2].rest_of : 0) - this.fixedAssetsNet.year_2
        result.year_3 = this.equityCapital.year_3 + (this.deadlineResult[3] ? this.deadlineResult[3].rest_of : 0) - this.fixedAssetsNet.year_3
        result.year_4 = this.equityCapital.year_4 + (this.deadlineResult[4] ? this.deadlineResult[4].rest_of : 0) - this.fixedAssetsNet.year_4
        result.year_5 = this.equityCapital.year_5 + (this.deadlineResult[5] ? this.deadlineResult[5].rest_of : 0) - this.fixedAssetsNet.year_5
        return result
      },
      // Trésorerie
      treasuries () {
        const result = {}
        result.year_1 = this.working_capital.year_1 - this.working_capital_requirements.year_1
        result.year_2 = this.working_capital.year_2 - this.working_capital_requirements.year_2
        result.year_3 = this.working_capital.year_3 - this.working_capital_requirements.year_3
        result.year_4 = this.working_capital.year_4 - this.working_capital_requirements.year_4
        result.year_5 = this.working_capital.year_5 - this.working_capital_requirements.year_5
        return result
      },
      // Ratio d'autonomie financière
      financial_autonomy_ratio () {
        const result = {}
        result.year_1 = this.equityCapital.year_1 / (this.deadlineResult[1] ? this.deadlineResult[1].rest_of : 1)
        result.year_2 = this.equityCapital.year_2 / (this.deadlineResult[2] ? this.deadlineResult[2].rest_of : 1)
        result.year_3 = this.equityCapital.year_3 / (this.deadlineResult[3] ? this.deadlineResult[3].rest_of : 1)
        result.year_4 = this.equityCapital.year_4 / (this.deadlineResult[4] ? this.deadlineResult[4].rest_of : 1)
        result.year_5 = this.equityCapital.year_5 / (this.deadlineResult[5] ? this.deadlineResult[5].rest_of : 1)
        return result
      },
      // Ratio d'indépendance financière
      financial_independence_ratio () {
        const result = {}
        result.year_1 = this.equityCapital.year_1 / (this.equityCapital.year_1 + (this.deadlineResult[1] ? this.deadlineResult[1].rest_of : 0))
        result.year_2 = this.equityCapital.year_2 / (this.equityCapital.year_2 + (this.deadlineResult[2] ? this.deadlineResult[2].rest_of : 0))
        result.year_3 = this.equityCapital.year_3 / (this.equityCapital.year_3 + (this.deadlineResult[3] ? this.deadlineResult[3].rest_of : 0))
        result.year_4 = this.equityCapital.year_4 / (this.equityCapital.year_4 + (this.deadlineResult[4] ? this.deadlineResult[4].rest_of : 0))
        result.year_5 = this.equityCapital.year_5 / (this.equityCapital.year_5 + (this.deadlineResult[5] ? this.deadlineResult[5].rest_of : 0))
        return result
      },
      // Ratio de liquidité de l'actif
      asset_liquidity_ratio () {
        const result = {}
        result.year_1 = (this.averageStocks.year_1 + this.tradeReceivables.year_1) / this.totalActive.year_1
        result.year_2 = (this.averageStocks.year_2 + this.tradeReceivables.year_2) / this.totalActive.year_2
        result.year_3 = (this.averageStocks.year_3 + this.tradeReceivables.year_3) / this.totalActive.year_3
        result.year_4 = (this.averageStocks.year_4 + this.tradeReceivables.year_4) / this.totalActive.year_4
        result.year_5 = (this.averageStocks.year_5 + this.tradeReceivables.year_5) / this.totalActive.year_5
        return result
      },
      // Ratio de financement  de l'immobilisation
      capital_asset_financing_ratio () {
        const result = {}
        result.year_1 = (this.equityCapital.year_1 + (this.deadlineResult[1] ? this.deadlineResult[1].rest_of : 0)) / this.fixedAssetsNet.year_1
        result.year_2 = (this.equityCapital.year_2 + (this.deadlineResult[2] ? this.deadlineResult[2].rest_of : 0)) / this.fixedAssetsNet.year_2
        result.year_3 = (this.equityCapital.year_3 + (this.deadlineResult[3] ? this.deadlineResult[3].rest_of : 0)) / this.fixedAssetsNet.year_3
        result.year_4 = (this.equityCapital.year_2 + (this.deadlineResult[4] ? this.deadlineResult[4].rest_of : 0)) / this.fixedAssetsNet.year_4
        result.year_5 = (this.equityCapital.year_5 + (this.deadlineResult[5] ? this.deadlineResult[5].rest_of : 0)) / this.fixedAssetsNet.year_5
        return result
      },
      // solvabilité ou taux de couverture du risque global
      solvency () {
        const result = {}
        result.year_1 = this.equityCapital.year_1 / this.totalLiabilities.year_1
        result.year_2 = this.equityCapital.year_2 / this.totalLiabilities.year_2
        result.year_3 = this.equityCapital.year_3 / this.totalLiabilities.year_3
        result.year_4 = this.equityCapital.year_4 / this.totalLiabilities.year_4
        result.year_5 = this.equityCapital.year_5 / this.totalLiabilities.year_5
        return result
      },
      // Taux d'endettement
      debt_ratio () {
        const result = {}
        result.year_1 = (this.deadlineResult[1] ? this.deadlineResult[1].rest_of : 0) / this.totalLiabilities.year_1
        result.year_2 = (this.deadlineResult[2] ? this.deadlineResult[2].rest_of : 0) / this.totalLiabilities.year_2
        result.year_3 = (this.deadlineResult[3] ? this.deadlineResult[3].rest_of : 0) / this.totalLiabilities.year_3
        result.year_4 = (this.deadlineResult[4] ? this.deadlineResult[4].rest_of : 0) / this.totalLiabilities.year_4
        result.year_5 = (this.deadlineResult[5] ? this.deadlineResult[5].rest_of : 0) / this.totalLiabilities.year_5
        return result
      },
      // Capacité de remboursement
      repayment_capacity () {
        const result = {}
        result.year_1 = (this.deadlineResult[1] ? this.deadlineResult[1].rest_of : 0) / this.caf.year_1
        result.year_2 = (this.deadlineResult[2] ? this.deadlineResult[2].rest_of : 0) / this.caf.year_2
        result.year_3 = (this.deadlineResult[3] ? this.deadlineResult[3].rest_of : 0) / this.caf.year_3
        result.year_4 = (this.deadlineResult[4] ? this.deadlineResult[4].rest_of : 0) / this.caf.year_4
        result.year_5 = (this.deadlineResult[5] ? this.deadlineResult[5].rest_of : 0) / this.caf.year_5
        return result
      },
      // Ratio de couverture des capitaux investis
      invested_capital_coverage_ratio () {
        const result = {}
        result.year_1 = (this.equityCapital.year_1 + (this.deadlineResult[1] ? this.deadlineResult[1].rest_of : 0)) / (this.fixedAssetsNet.year_1 + this.bfr.year_1)
        result.year_2 = (this.equityCapital.year_2 + (this.deadlineResult[2] ? this.deadlineResult[2].rest_of : 0)) / (this.fixedAssetsNet.year_2 + this.bfr.year_2)
        result.year_3 = (this.equityCapital.year_3 + (this.deadlineResult[3] ? this.deadlineResult[3].rest_of : 0)) / (this.fixedAssetsNet.year_3 + this.bfr.year_3)
        result.year_4 = (this.equityCapital.year_4 + (this.deadlineResult[4] ? this.deadlineResult[4].rest_of : 0)) / (this.fixedAssetsNet.year_4 + this.bfr.year_4)
        result.year_5 = (this.equityCapital.year_5 + (this.deadlineResult[5] ? this.deadlineResult[5].rest_of : 0)) / (this.fixedAssetsNet.year_5 + this.bfr.year_5)
        return result
      },
      // Ratio de liquidité générale
      general_liquidity_ratio () {
        const result = {}
        result.year_1 = (this.averageStocks.year_1 + this.tradeReceivables.year_1) / this.supplierDebts.year_1
        result.year_2 = (this.averageStocks.year_2 + this.tradeReceivables.year_2) / this.supplierDebts.year_2
        result.year_3 = (this.averageStocks.year_3 + this.tradeReceivables.year_3) / this.supplierDebts.year_3
        result.year_4 = (this.averageStocks.year_4 + this.tradeReceivables.year_4) / this.supplierDebts.year_4
        result.year_5 = (this.averageStocks.year_5 + this.tradeReceivables.year_5) / this.supplierDebts.year_5
        return result
      },
      // Ratio de liquidité gratuite
      free_liquidity_ratio () {
        const result = {}
        result.year_1 = this.tradeReceivables.year_1 / this.supplierDebts.year_1
        result.year_2 = this.tradeReceivables.year_2 / this.supplierDebts.year_2
        result.year_3 = this.tradeReceivables.year_3 / this.supplierDebts.year_3
        result.year_4 = this.tradeReceivables.year_4 / this.supplierDebts.year_4
        result.year_5 = this.tradeReceivables.year_5 / this.supplierDebts.year_5
        return result
      },
      // Rotation clients
      customers_rotation () {
        const result = {}
        result.year_1 = (this.tradeReceivables.year_1 / this.turnoverIncomes.year_1) * 360
        result.year_2 = (this.tradeReceivables.year_2 / this.turnoverIncomes.year_2) * 360
        result.year_3 = (this.tradeReceivables.year_3 / this.turnoverIncomes.year_3) * 360
        result.year_4 = (this.tradeReceivables.year_4 / this.turnoverIncomes.year_4) * 360
        result.year_5 = (this.tradeReceivables.year_5 / this.turnoverIncomes.year_5) * 360
        return result
      },
      // Rotation Fournisseurs
      suppliers_rotation () {
        const result = {}
        result.year_1 = (this.supplierDebts.year_1 / this.productionCostIncomes.year_1) * 360
        result.year_2 = (this.supplierDebts.year_2 / this.productionCostIncomes.year_2) * 360
        result.year_3 = (this.supplierDebts.year_3 / this.productionCostIncomes.year_3) * 360
        result.year_4 = (this.supplierDebts.year_4 / this.productionCostIncomes.year_4) * 360
        result.year_5 = (this.supplierDebts.year_5 / this.productionCostIncomes.year_5) * 360
        return result
      },
      // Rotation de stocks
      stocks_rotation () {
        const result = {}
        result.year_1 = (this.averageStocks.year_1 / this.productionCostIncomes.year_1) * 360
        result.year_2 = (this.averageStocks.year_2 / this.productionCostIncomes.year_2) * 360
        result.year_3 = (this.averageStocks.year_3 / this.productionCostIncomes.year_3) * 360
        result.year_4 = (this.averageStocks.year_4 / this.productionCostIncomes.year_4) * 360
        result.year_5 = (this.averageStocks.year_5 / this.productionCostIncomes.year_5) * 360
        return result
      },
      // Rentabilité globale
      overall_profitability () {
        const result = {}
        result.year_1 = this.netIncome.year_1 / this.turnoverIncomes.year_1
        result.year_2 = this.netIncome.year_2 / this.turnoverIncomes.year_2
        result.year_3 = this.netIncome.year_3 / this.turnoverIncomes.year_3
        result.year_4 = this.netIncome.year_4 / this.turnoverIncomes.year_4
        result.year_5 = this.netIncome.year_5 / this.turnoverIncomes.year_5
        return result
      },
      // Rentabilité financière
      financial_profitability () {
        const result = {}
        result.year_1 = this.netIncome.year_1 / this.equityCapital.year_1
        result.year_2 = this.netIncome.year_2 / this.equityCapital.year_2
        result.year_3 = this.netIncome.year_3 / this.equityCapital.year_3
        result.year_4 = this.netIncome.year_4 / this.equityCapital.year_4
        result.year_5 = this.netIncome.year_5 / this.equityCapital.year_5
        return result
      },
      // Ratio de valeur ajoutée
      value_added_ratio () {
        const result = {}
        result.year_1 = this.addedValue.year_1 / this.turnoverIncomes.year_1
        result.year_2 = this.addedValue.year_2 / this.turnoverIncomes.year_2
        result.year_3 = this.addedValue.year_3 / this.turnoverIncomes.year_3
        result.year_4 = this.addedValue.year_4 / this.turnoverIncomes.year_4
        result.year_5 = this.addedValue.year_5 / this.turnoverIncomes.year_5
        return result
      },
      // Capacité d'autofinancement
      self_financing_capacity () {
        return {
          year_1: this.caf.year_1,
          year_2: this.caf.year_2,
          year_3: this.caf.year_3,
          year_4: this.caf.year_4,
          year_5: this.caf.year_5,
        }
      },
      // Ratio de CAF
      caf_ratio () {
        const result = {}
        result.year_1 = this.caf.year_1 / this.fixedAssetsNet.year_1
        result.year_2 = this.caf.year_2 / this.fixedAssetsNet.year_2
        result.year_3 = this.caf.year_3 / this.fixedAssetsNet.year_3
        result.year_4 = this.caf.year_4 / this.fixedAssetsNet.year_4
        result.year_5 = this.caf.year_5 / this.fixedAssetsNet.year_5
        return result
      },
      // Autofinancement
      self_financing () {
        return {
          year_1: this.caf.year_1,
          year_2: this.caf.year_2,
          year_3: this.caf.year_3,
          year_4: this.caf.year_4,
          year_5: this.caf.year_5,
        }
      },
      // Taux de marge bruted'exploitation
      gross_operating_margin () {
        const result = {}
        result.year_1 = this.operatingIncome.year_1 / this.turnoverIncomes.year_1
        result.year_2 = this.operatingIncome.year_2 / this.turnoverIncomes.year_2
        result.year_3 = this.operatingIncome.year_3 / this.turnoverIncomes.year_3
        result.year_4 = this.operatingIncome.year_4 / this.turnoverIncomes.year_4
        result.year_5 = this.operatingIncome.year_5 / this.turnoverIncomes.year_5
        return result
      },
      // Ratio de marge brute d'exploitation
      gross_operating_margin_ratio () {
        const result = {}
        result.year_1 = this.grossOperatingSurplus.year_1 / this.turnoverIncomes.year_1
        result.year_2 = this.grossOperatingSurplus.year_2 / this.turnoverIncomes.year_2
        result.year_3 = this.grossOperatingSurplus.year_3 / this.turnoverIncomes.year_3
        result.year_4 = this.grossOperatingSurplus.year_4 / this.turnoverIncomes.year_4
        result.year_5 = this.grossOperatingSurplus.year_5 / this.turnoverIncomes.year_5
        return result
      },
      // Effet de levier de l'actif
      asset_leverage () {
        const result = {}
        result.year_1 = this.totalLiabilities.year_1 / this.equityCapital.year_1
        result.year_2 = this.totalLiabilities.year_2 / this.equityCapital.year_2
        result.year_3 = this.totalLiabilities.year_3 / this.equityCapital.year_3
        result.year_4 = this.totalLiabilities.year_4 / this.equityCapital.year_4
        result.year_5 = this.totalLiabilities.year_5 / this.equityCapital.year_5
        return result
      },
      // Effet de levier des emprunts avec interets
      leverage_interest_bearing_borrowings () {
        const result = {}
        result.year_1 = (this.deadlineResult[1] ? this.deadlineResult[1].rest_of : 0) / this.equityCapital.year_1
        result.year_2 = (this.deadlineResult[2] ? this.deadlineResult[2].rest_of : 0) / this.equityCapital.year_2
        result.year_3 = (this.deadlineResult[3] ? this.deadlineResult[3].rest_of : 0) / this.equityCapital.year_3
        result.year_4 = (this.deadlineResult[4] ? this.deadlineResult[4].rest_of : 0) / this.equityCapital.year_4
        result.year_5 = (this.deadlineResult[5] ? this.deadlineResult[5].rest_of : 0) / this.equityCapital.year_5
        return result
      },
    },
  }
</script>

<style scoped>

</style>
