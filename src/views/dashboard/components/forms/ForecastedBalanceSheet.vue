<template>
  <v-container
    id="income-statement"
    fluid
    tag="section"
  >
    <v-row>
      <v-col>
        <base-material-card
          inline
          icon="mdi-bank"
          title="ACTIF"
          class="px-5 py-3"
          color="info"
        >
          <v-simple-table fixed-header>
            <thead>
              <tr>
                <th class="primary--text text-overline">
                  ACTIF
                </th>
                <th class="primary--text text-right text-overline">
                  Année -2
                </th>
                <th class="primary--text text-right text-overline">
                  Année -1
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
                <td>Actif Immobilisé Net</td>
                <td class="text-right pt-5">
                  --
                </td>
                <td class="text-right pt-5">
                  --
                </td>
                <td class="text-right">
                  {{ fixed_assets_net.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ fixed_assets_net.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ fixed_assets_net.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ fixed_assets_net.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ fixed_assets_net.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Immobilisations (Brut)</td>
                <td class="text-right pt-5">
                  --
                </td>
                <td class="text-right pt-5">
                  --
                </td>
                <td class="text-right">
                  {{ fixed_assets_gross.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ fixed_assets_gross.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ fixed_assets_gross.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ fixed_assets_gross.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ fixed_assets_gross.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Amortissements</td>
                <td class="text-right pt-5">
                  --
                </td>
                <td class="text-right pt-5">
                  --
                </td>
                <td class="text-right">
                  {{ amortization_result.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ amortization_result.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ amortization_result.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ amortization_result.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ amortization_result.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Immobilisations (Net)</td>
                <td class="text-right pt-5">
                  --
                </td>
                <td class="text-right pt-5">
                  --
                </td>
                <td class="text-right">
                  {{ fixed_assets_net.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ fixed_assets_net.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ fixed_assets_net.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ fixed_assets_net.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ fixed_assets_net.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Stocks</td>
                <td class="text-right pt-5">
                  --
                </td>
                <td class="text-right pt-5">
                  --
                </td>
                <td class="text-right">
                  {{ averageStocks.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ averageStocks.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ averageStocks.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ averageStocks.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ averageStocks.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Créances clients</td>
                <td class="text-right">
                  --
                </td>
                <td class="text-right">
                  --
                </td>
                <td class="text-right">
                  {{ tradeReceivables.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ tradeReceivables.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ tradeReceivables.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ tradeReceivables.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ tradeReceivables.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Trésorerie actif</td>
                <td class="text-right">
                  --
                </td>
                <td class="text-right">
                  --
                </td>
                <td class="text-right">
                  {{ active_cash_flow.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ active_cash_flow.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ active_cash_flow.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ active_cash_flow.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ active_cash_flow.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td class="text--primary text-overline">
                  Total Actif
                </td>
                <td class="text-right">
                  --
                </td>
                <td class="text-right">
                  --
                </td>
                <td class="text-right">
                  {{ total_active.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ total_active.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ total_active.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ total_active.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ total_active.year_5 | formatNumber }}
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <base-material-card
          inline
          icon="mdi-bank"
          title="PASSIF"
          class="px-5 py-3"
          color="info"
        >
          <v-simple-table fixed-header>
            <thead>
              <tr>
                <th class="primary--text text-overline">
                  PASSIF
                </th>
                <th class="primary--text text-right text-overline">
                  Année -2
                </th>
                <th class="primary--text text-right text-overline">
                  Année -1
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
                <td>Capitaux Propres</td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  {{ equity_capital.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ equity_capital.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ equity_capital.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ equity_capital.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ equity_capital.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Capital</td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  {{ totalContributionAmount | formatNumber }}
                </td>
                <td class="text-right">
                  {{ totalContributionAmount | formatNumber }}
                </td>
                <td class="text-right">
                  {{ totalContributionAmount | formatNumber }}
                </td>
                <td class="text-right">
                  {{ totalContributionAmount | formatNumber }}
                </td>
                <td class="text-right">
                  {{ totalContributionAmount | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>RAN</td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  {{ ran_result.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ ran_result.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ ran_result.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ ran_result.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ ran_result.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Résultat</td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  0
                </td>
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
                <td>Dont dividendes</td>
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
                <td class="text-right">
                  --
                </td>
                <td class="text-right">
                  --
                </td>
              </tr>
              <tr>
                <td>Dettes financières</td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  {{ ((deadlineResult[1]) ? deadlineResult[1].rest_of : 0) | formatNumber }}
                </td>
                <td class="text-right">
                  {{ ((deadlineResult[2]) ? deadlineResult[2].rest_of : 0) | formatNumber }}
                </td>
                <td class="text-right">
                  {{ ((deadlineResult[3]) ? deadlineResult[3].rest_of : 0) | formatNumber }}
                </td>
                <td class="text-right">
                  {{ ((deadlineResult[4]) ? deadlineResult[4].rest_of : 0) | formatNumber }}
                </td>
                <td class="text-right">
                  {{ ((deadlineResult[5]) ? deadlineResult[5].rest_of : 0) | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Dettes fournisseurs</td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  {{ supplierDebts.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ supplierDebts.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ supplierDebts.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ supplierDebts.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ supplierDebts.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Dettes Fiscales</td>
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
                <td class="text-right">
                  --
                </td>
                <td class="text-right">
                  --
                </td>
              </tr>
              <tr>
                <td class="text--primary text-overline">
                  Trésorerie Passif
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  {{ passive_cash_flow.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ passive_cash_flow.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ passive_cash_flow.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ passive_cash_flow.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ passive_cash_flow.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Total Passif</td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  {{ total_liabilities.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ total_liabilities.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ total_liabilities.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ total_liabilities.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ total_liabilities.year_5 | formatNumber }}
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
    name: 'ForecastedBalanceSheet',
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
      investments: {
        type: Object,
        required: true,
      },
      amortizations: {
        type: Object,
        required: true,
      },
      // Créances clients
      tradeReceivables: {
        type: Object,
        required: true,
      },
      // Stock moyen
      averageStocks: {
        type: Object,
        required: true,
      },
      deadlineResult: {
        type: Array,
        required: true,
      },
      totalContributionAmount: {
        type: Number,
        required: true,
      },
      supplierDebts: {
        type: Object,
        required: true,
      },
      netIncome: {
        type: Object,
        required: true,
      },
      finalCashFlow: {
        type: Object,
        required: true,
      },
    },
    computed: {
      // Immobilisations (Brut)
      fixed_assets_gross () {
        const result = {}
        result.year_1 = this.investments.year_1
        result.year_2 = result.year_1
        result.year_3 = result.year_2
        result.year_4 = result.year_3
        result.year_5 = result.year_4
        return result
      },
      // Amortissements
      amortization_result () {
        const result = {}
        result.year_1 = this.amortizations.year_1
        result.year_2 = this.amortizations.year_2 + result.year_1
        result.year_3 = this.amortizations.year_3 + result.year_2
        result.year_4 = this.amortizations.year_4 + result.year_3
        result.year_5 = this.amortizations.year_5 + result.year_4
        return result
      },
      // Immobilisations (Net)
      fixed_assets_net () {
        return {
          year_1: this.fixed_assets_gross.year_1 - this.amortization_result.year_1,
          year_2: this.fixed_assets_gross.year_2 - this.amortization_result.year_2,
          year_3: this.fixed_assets_gross.year_3 - this.amortization_result.year_3,
          year_4: this.fixed_assets_gross.year_4 - this.amortization_result.year_4,
          year_5: this.fixed_assets_gross.year_5 - this.amortization_result.year_5,
        }
      },
      // RAN
      ran_result () {
        const result = {}
        result.year_1 = 0
        result.year_2 = result.year_1 + this.netIncome.year_1
        result.year_3 = result.year_2 + this.netIncome.year_2
        result.year_4 = result.year_3 + this.netIncome.year_3
        result.year_5 = result.year_4 + this.netIncome.year_4
        return result
      },
      // Capitaux Propres
      equity_capital () {
        return {
          year_1: this.totalContributionAmount + this.ran_result.year_1 + this.netIncome.year_1,
          year_2: this.totalContributionAmount + this.ran_result.year_2 + this.netIncome.year_2,
          year_3: this.totalContributionAmount + this.ran_result.year_3 + this.netIncome.year_3,
          year_4: this.totalContributionAmount + this.ran_result.year_4 + this.netIncome.year_4,
          year_5: this.totalContributionAmount + this.ran_result.year_5 + this.netIncome.year_5,
        }
      },
      // Trésorerie Passive
      passive_cash_flow () {
        const result = {}
        // Year 1
        // const liabilitiesYear1 = this.equity_capital.year_1 + this.deadlineResult[0].rest_of + this.supplierDebts.year_1 + 0
        // const activeYear1 = this.fixed_assets_net.year_1 + this.averageStocks.year_1 + this.tradeReceivables.year_1
        // if (liabilitiesYear1 < activeYear1) result.year_1 = activeYear1 - liabilitiesYear1
        // else result.year_1 = 0
        result.year_1 = 0
        // Year 2
        const liabilitiesYear2 = this.equity_capital.year_2 + (this.deadlineResult[1] ? this.deadlineResult[1].rest_of : 0) + this.supplierDebts.year_2 + 0
        const activeYear2 = this.fixed_assets_net.year_2 + this.averageStocks.year_2 + this.tradeReceivables.year_2
        if (liabilitiesYear2 < activeYear2) result.year_2 = activeYear2 - liabilitiesYear2
        else result.year_2 = 0
        // Year 3
        const liabilitiesYear3 = this.equity_capital.year_3 + (this.deadlineResult[2] ? this.deadlineResult[2].rest_of : 0) + this.supplierDebts.year_3 + 0
        const activeYear3 = this.fixed_assets_net.year_3 + this.averageStocks.year_3 + this.tradeReceivables.year_3
        if (liabilitiesYear3 < activeYear3) result.year_3 = activeYear3 - liabilitiesYear3
        else result.year_3 = 0
        // Year 4
        const liabilitiesYear4 = this.equity_capital.year_4 + (this.deadlineResult[3] ? this.deadlineResult[3].rest_of : 0) + this.supplierDebts.year_4 + 0
        const activeYear4 = this.fixed_assets_net.year_4 + this.averageStocks.year_4 + this.tradeReceivables.year_4
        if (liabilitiesYear4 < activeYear4) result.year_4 = activeYear4 - liabilitiesYear4
        else result.year_4 = 0
        // Year 5
        const liabilitiesYear5 = this.equity_capital.year_5 + (this.deadlineResult[4] ? this.deadlineResult[4].rest_of : 0) + this.supplierDebts.year_5 + 0
        const activeYear5 = this.fixed_assets_net.year_5 + this.averageStocks.year_5 + this.tradeReceivables.year_5
        if (liabilitiesYear5 < activeYear5) result.year_5 = activeYear5 - liabilitiesYear5
        else result.year_5 = 0
        // résultat final
        return result
      },
      // Total Passif
      total_liabilities () {
        return {
          year_1: this.equity_capital.year_1 + (this.deadlineResult[1] ? this.deadlineResult[1].rest_of : 0) + this.supplierDebts.year_1 + this.passive_cash_flow.year_1,
          year_2: this.equity_capital.year_2 + (this.deadlineResult[2] ? this.deadlineResult[2].rest_of : 0) + this.supplierDebts.year_2 + this.passive_cash_flow.year_2,
          year_3: this.equity_capital.year_3 + (this.deadlineResult[3] ? this.deadlineResult[3].rest_of : 0) + this.supplierDebts.year_3 + this.passive_cash_flow.year_3,
          year_4: this.equity_capital.year_4 + (this.deadlineResult[4] ? this.deadlineResult[4].rest_of : 0) + this.supplierDebts.year_4 + this.passive_cash_flow.year_4,
          year_5: this.equity_capital.year_5 + ((this.deadlineResult[5]) ? this.deadlineResult[5].rest_of : 0) + this.supplierDebts.year_5 + this.passive_cash_flow.year_5,
        }
      },
      // Trésorerie actif
      active_cash_flow () {
        return {
          year_1: this.finalCashFlow.year_1,
          year_2: this.finalCashFlow.year_2,
          year_3: this.finalCashFlow.year_3,
          year_4: this.finalCashFlow.year_4,
          year_5: this.finalCashFlow.year_5,
        }
      },
      // Total actif
      total_active () {
        return {
          year_1: this.fixed_assets_net.year_1 + this.averageStocks.year_1 + this.tradeReceivables.year_1 + this.active_cash_flow.year_1,
          year_2: this.fixed_assets_net.year_2 + this.averageStocks.year_2 + this.tradeReceivables.year_2 + this.active_cash_flow.year_2,
          year_3: this.fixed_assets_net.year_3 + this.averageStocks.year_3 + this.tradeReceivables.year_3 + this.active_cash_flow.year_3,
          year_4: this.fixed_assets_net.year_4 + this.averageStocks.year_4 + this.tradeReceivables.year_4 + this.active_cash_flow.year_4,
          year_5: this.fixed_assets_net.year_5 + this.averageStocks.year_5 + this.tradeReceivables.year_5 + this.active_cash_flow.year_5,
        }
      },
    },
    watch: {
      fixed_assets_net: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('fixedAssetsNetUpdate', val)
        },
      },
      equity_capital: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('equityCapitalUpdate', val)
        },
      },
      total_active: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('totalActiveUpdate', val)
        },
      },
      total_liabilities: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('totalLiabilitiesUpdate', val)
        },
      },
    },
  }
</script>

<style scoped>

</style>
