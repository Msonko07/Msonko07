<template>
  <v-container
    id="income-statement"
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
          icon="mdi-chart-line"
          title="COMPTES DE RESULTATS (XOF)"
          class="px-5 py-3"
          color="info"
        >
          <v-simple-table fixed-header>
            <thead>
              <tr>
                <th class="primary--text text-overline">
                  #
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
                <td>Chiffre d'affaires (CA)</td>
                <td class="text-right pt-5">
                  <v-text-field
                    outlined
                    dense
                  />
                </td>
                <td class="text-right pt-5">
                  <v-text-field
                    outlined
                    dense
                  />
                </td>
                <td class="text-right">
                  {{ turnover_incomes.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ turnover_incomes.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ turnover_incomes.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ turnover_incomes.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ turnover_incomes.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td colspan="8" />
              </tr>
              <tr>
                <td>Achats et charges de production</td>
                <td class="text-right pt-5">
                  <v-text-field
                    outlined
                    dense
                  />
                </td>
                <td class="text-right pt-5">
                  <v-text-field
                    outlined
                    dense
                  />
                </td>
                <td class="text-right">
                  {{ production_cost_incomes.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ production_cost_incomes.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ production_cost_incomes.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ production_cost_incomes.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ production_cost_incomes.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td class="text--primary text-overline">
                  Marge brute
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  {{ gross_margin.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ gross_margin.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ gross_margin.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ gross_margin.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ gross_margin.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Pourcentage</td>
                <td class="text-right text--secondary">
                  0%
                </td>
                <td class="text-right text--secondary">
                  0%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_1 > 0) ? Math.round((gross_margin.year_1 / turnover_incomes.year_1) * 100) : 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_2 > 0) ? Math.round((gross_margin.year_2 / turnover_incomes.year_2) * 100) : 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_3 > 0) ? Math.round((gross_margin.year_3 / turnover_incomes.year_3) * 100) : 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_4 > 0) ? Math.round((gross_margin.year_4 / turnover_incomes.year_4) * 100): 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_5 > 0) ? Math.round((gross_margin.year_5 / turnover_incomes.year_5) * 100) : 0 }}%
                </td>
              </tr>
              <tr>
                <td colspan="8" />
              </tr>
              <tr>
                <td>Charges externes</td>
                <td class="text-right pt-5">
                  <v-text-field
                    outlined
                    dense
                  />
                </td>
                <td class="text-right pt-5">
                  <v-text-field
                    outlined
                    dense
                  />
                </td>
                <td class="text-right">
                  {{ external_incomes.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ external_incomes.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ external_incomes.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ external_incomes.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ external_incomes.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td class="text--primary text-overline">
                  Valeur ajoutée (VA)
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  {{ added_value.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ added_value.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ added_value.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ added_value.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ added_value.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Pourcentage</td>
                <td class="text-right text--secondary">
                  0%
                </td>
                <td class="text-right text--secondary">
                  0%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_1 > 0) ? Math.round((added_value.year_1 / turnover_incomes.year_1) * 100) : 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_2 > 0) ? Math.round((added_value.year_2 / turnover_incomes.year_2) * 100) : 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_3 > 0) ? Math.round((added_value.year_3 / turnover_incomes.year_3) * 100) : 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_4 > 0) ? Math.round((added_value.year_4 / turnover_incomes.year_4) * 100) : 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_5 > 0) ? Math.round((added_value.year_5 / turnover_incomes.year_5) * 100) : 0 }}%
                </td>
              </tr>
              <tr>
                <td colspan="8" />
              </tr>
              <tr>
                <td>Impôts et taxes</td>
                <td class="text-right pt-5">
                  <v-text-field
                    outlined
                    dense
                  />
                </td>
                <td class="text-right pt-5">
                  <v-text-field
                    outlined
                    dense
                  />
                </td>
                <td class="text-right">
                  {{ dues_and_taxes.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ dues_and_taxes.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ dues_and_taxes.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ dues_and_taxes.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ dues_and_taxes.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Charges de personnel</td>
                <td class="text-right pt-5">
                  <v-text-field
                    outlined
                    dense
                  />
                </td>
                <td class="text-right pt-5">
                  <v-text-field
                    outlined
                    dense
                  />
                </td>
                <td class="text-right">
                  {{ personal_incomes.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ personal_incomes.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ personal_incomes.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ personal_incomes.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ personal_incomes.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td class="text--primary text-overline">
                  Excédent brut d'exploitation (EBE)
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  {{ gross_operating_surplus.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ gross_operating_surplus.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ gross_operating_surplus.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ gross_operating_surplus.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ gross_operating_surplus.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Pourcentage</td>
                <td class="text-right text--secondary">
                  0%
                </td>
                <td class="text-right text--secondary">
                  0%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_1 > 0) ? Math.round((gross_operating_surplus.year_1 / turnover_incomes.year_1) * 100) : 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_2 > 0) ? Math.round((gross_operating_surplus.year_2 / turnover_incomes.year_2) * 100) : 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_3 > 0) ? Math.round((gross_operating_surplus.year_3 / turnover_incomes.year_3) * 100) : 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_4 > 0) ? Math.round((gross_operating_surplus.year_4 / turnover_incomes.year_4) * 100) : 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_5 > 0) ? Math.round((gross_operating_surplus.year_5 / turnover_incomes.year_5) * 100) : 0 }}%
                </td>
              </tr>
              <tr>
                <td colspan="8" />
              </tr>
              <tr>
                <td>Dotations aux amortissements</td>
                <td class="text-right pt-5">
                  <v-text-field
                    outlined
                    dense
                  />
                </td>
                <td class="text-right pt-5">
                  <v-text-field
                    outlined
                    dense
                  />
                </td>
                <td class="text-right">
                  {{ deprecation_and_amortization.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ deprecation_and_amortization.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ deprecation_and_amortization.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ deprecation_and_amortization.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ deprecation_and_amortization.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td class="text--primary text-overline">
                  Résultat d'exploitation (REx)
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  {{ operating_income.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ operating_income.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ operating_income.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ operating_income.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ operating_income.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Pourcentage</td>
                <td class="text-right text--secondary">
                  0%
                </td>
                <td class="text-right text--secondary">
                  0%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_1 > 0) ? Math.round((operating_income.year_1 / turnover_incomes.year_1) * 100) : 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_2 > 0) ? Math.round((operating_income.year_2 / turnover_incomes.year_2) * 100) : 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_3 > 0) ? Math.round((operating_income.year_3 / turnover_incomes.year_3) * 100) : 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_4 > 0) ? Math.round((operating_income.year_4 / turnover_incomes.year_4) * 100) : 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_5 > 0) ? Math.round((operating_income.year_5 / turnover_incomes.year_5) * 100) : 0 }}%
                </td>
              </tr>
              <tr>
                <td colspan="8" />
              </tr>
              <tr>
                <td>Charges financières</td>
                <td class="text-right pt-5">
                  <v-text-field
                    outlined
                    dense
                  />
                </td>
                <td class="text-right pt-5">
                  <v-text-field
                    outlined
                    dense
                  />
                </td>
                <td class="text-right">
                  {{ financialCharges.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ financialCharges.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ financialCharges.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ financialCharges.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ financialCharges.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td class="text--primary text-overline">
                  Résultat courant
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  {{ current_income.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ current_income.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ current_income.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ current_income.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ current_income.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Pourcentage</td>
                <td class="text-right text--secondary">
                  0%
                </td>
                <td class="text-right text--secondary">
                  0%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_1 > 0) ? Math.round((current_income.year_1 / turnover_incomes.year_1) * 100) : 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_2 > 0) ? Math.round((current_income.year_2 / turnover_incomes.year_2) * 100) : 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_3 > 0) ? Math.round((current_income.year_3 / turnover_incomes.year_3) * 100) : 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_4 > 0) ? Math.round((current_income.year_4 / turnover_incomes.year_4) * 100) : 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_5 > 0) ? Math.round((current_income.year_5 / turnover_incomes.year_5) * 100) : 0 }}%
                </td>
              </tr>
              <tr>
                <td colspan="8" />
              </tr>
              <tr>
                <td>Impots sur les sociétés (IS)</td>
                <td class="text-right pt-5">
                  <v-text-field
                    outlined
                    dense
                  />
                </td>
                <td class="text-right pt-5">
                  <v-text-field
                    outlined
                    dense
                  />
                </td>
                <td class="text-right">
                  {{ corporate_income_taxes.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ corporate_income_taxes.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ corporate_income_taxes.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ corporate_income_taxes.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ corporate_income_taxes.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td class="text--primary text-overline">
                  Résultat Net (RN)
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  {{ net_income.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ net_income.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ net_income.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ net_income.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ net_income.year_5 | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Pourcentage</td>
                <td class="text-right text--secondary">
                  0%
                </td>
                <td class="text-right text--secondary">
                  0%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_1 > 0) ? Math.round((net_income.year_1 / turnover_incomes.year_1) * 100) : 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_2 > 0) ? Math.round((net_income.year_2 / turnover_incomes.year_2) * 100) : 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_3 > 0) ? Math.round((net_income.year_3 / turnover_incomes.year_3) * 100) : 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_4 > 0) ? Math.round((net_income.year_4 / turnover_incomes.year_4) * 100) : 0 }}%
                </td>
                <td class="text-right text--secondary">
                  {{ (turnover_incomes.year_5 > 0) ? Math.round((net_income.year_5 / turnover_incomes.year_5) * 100) : 0 }}%
                </td>
              </tr>
              <tr>
                <td colspan="8" />
              </tr>
              <tr>
                <td class="text--primary text-overline">
                  CAF
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  0
                </td>
                <td class="text-right">
                  {{ caf.year_1 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ caf.year_2 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ caf.year_3 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ caf.year_4 | formatNumber }}
                </td>
                <td class="text-right">
                  {{ caf.year_5 | formatNumber }}
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
    name: 'IncomeStatement',
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
      totalMonthlyTurnover: {
        type: Number,
        required: true,
      },
      totalMonthlyExternal: {
        type: Number,
        required: true,
      },
      totalMonthlyPersonal: {
        type: Number,
        required: true,
      },
      totalMonthlyCost: {
        type: Number,
        required: true,
      },
      totalAmortization: {
        type: Object,
        required: true,
      },
      financialCharges: {
        type: Object,
        required: true,
      },
    },
    data () {
      return {}
    },
    computed: {
      // Chiffre d'affaires (CA)
      turnover_incomes () {
        const year1 = this.totalMonthlyTurnover * parseInt(this.hypothesis.activity_month_number)
        const year2 = this.totalMonthlyTurnover * 12 * (1 + parseFloat(this.hypothesis.turnover))
        const year3 = year2 * (1 + parseFloat(this.hypothesis.turnover))
        const year4 = year3 * (1 + parseFloat(this.hypothesis.turnover))
        const year5 = year4 * (1 + parseFloat(this.hypothesis.turnover))
        return {
          year_1: year1,
          year_2: year2,
          year_3: year3,
          year_4: year4,
          year_5: year5,
        }
      },
      // Achats et charges de production
      production_cost_incomes () {
        const year1 = this.totalMonthlyCost * parseInt(this.hypothesis.activity_month_number)
        const year2 = this.totalMonthlyCost * 12 * (1 + parseFloat(this.hypothesis.estimated_charge))
        const year3 = year2 * (1 + parseFloat(this.hypothesis.estimated_charge))
        const year4 = year3 * (1 + parseFloat(this.hypothesis.estimated_charge))
        const year5 = year4 * (1 + parseFloat(this.hypothesis.estimated_charge))
        return {
          year_1: year1,
          year_2: year2,
          year_3: year3,
          year_4: year4,
          year_5: year5,
        }
      },
      // Marge brute
      gross_margin () {
        return {
          year_1: this.turnover_incomes.year_1 - this.production_cost_incomes.year_1,
          year_2: this.turnover_incomes.year_2 - this.production_cost_incomes.year_2,
          year_3: this.turnover_incomes.year_3 - this.production_cost_incomes.year_3,
          year_4: this.turnover_incomes.year_4 - this.production_cost_incomes.year_4,
          year_5: this.turnover_incomes.year_5 - this.production_cost_incomes.year_5,
        }
      },
      // Charges externes
      external_incomes () {
        const year1 = this.totalMonthlyExternal * parseInt(this.hypothesis.activity_month_number)
        const year2 = this.totalMonthlyExternal * 12 * (1 + parseFloat(this.hypothesis.estimated_charge))
        const year3 = year2 * (1 + parseFloat(this.hypothesis.estimated_charge))
        const year4 = year3 * (1 + parseFloat(this.hypothesis.estimated_charge))
        const year5 = year4 * (1 + parseFloat(this.hypothesis.estimated_charge))
        return {
          year_1: year1,
          year_2: year2,
          year_3: year3,
          year_4: year4,
          year_5: year5,
        }
      },
      // Valeur ajoutée
      added_value () {
        return {
          year_1: this.gross_margin.year_1 - this.external_incomes.year_1,
          year_2: this.gross_margin.year_2 - this.external_incomes.year_2,
          year_3: this.gross_margin.year_3 - this.external_incomes.year_3,
          year_4: this.gross_margin.year_4 - this.external_incomes.year_4,
          year_5: this.gross_margin.year_5 - this.external_incomes.year_5,
        }
      },
      // Charges de personnel
      personal_incomes () {
        const year1 = this.totalMonthlyPersonal * parseInt(this.hypothesis.activity_month_number)
        const year2 = this.totalMonthlyPersonal * 12 * (1 + parseFloat(this.hypothesis.salary))
        const year3 = year2 * (1 + parseFloat(this.hypothesis.salary))
        const year4 = year3 * (1 + parseFloat(this.hypothesis.salary))
        const year5 = year4 * (1 + parseFloat(this.hypothesis.salary))
        return {
          year_1: year1,
          year_2: year2,
          year_3: year3,
          year_4: year4,
          year_5: year5,
        }
      },
      // Excédent brut d'exploitation (EBE)
      gross_operating_surplus () {
        return {
          year_1: this.added_value.year_1 - this.dues_and_taxes.year_1 - this.personal_incomes.year_1,
          year_2: this.added_value.year_2 - this.dues_and_taxes.year_2 - this.personal_incomes.year_2,
          year_3: this.added_value.year_3 - this.dues_and_taxes.year_3 - this.personal_incomes.year_3,
          year_4: this.added_value.year_4 - this.dues_and_taxes.year_4 - this.personal_incomes.year_4,
          year_5: this.added_value.year_5 - this.dues_and_taxes.year_5 - this.personal_incomes.year_5,
        }
      },
      // Dotations aux amortissements
      deprecation_and_amortization () {
        // ToDo: Complete the sentence
        /*
        const year1 = this.totalAmortization.year_1 * parseInt(this.hypothesis.activity_month_number)
        const year2 = (this.totalAmortization.year_1 * 12) + this.totalAmortization.year_2
        const year3 = year2 + this.totalAmortization.year_3
        const year4 = year3 + this.totalAmortization.year_4
        const year5 = year4 + this.totalAmortization.year_5
        */
        return {
          year_1: this.totalAmortization.year_1,
          year_2: this.totalAmortization.year_2,
          year_3: this.totalAmortization.year_3,
          year_4: this.totalAmortization.year_4,
          year_5: this.totalAmortization.year_5,
        }
      },
      // Résultat d'exploitation
      operating_income () {
        return {
          year_1: this.gross_operating_surplus.year_1 - this.deprecation_and_amortization.year_1,
          year_2: this.gross_operating_surplus.year_2 - this.deprecation_and_amortization.year_2,
          year_3: this.gross_operating_surplus.year_3 - this.deprecation_and_amortization.year_3,
          year_4: this.gross_operating_surplus.year_4 - this.deprecation_and_amortization.year_4,
          year_5: this.gross_operating_surplus.year_5 - this.deprecation_and_amortization.year_5,
        }
      },
      // Résultat courant
      current_income () {
        return {
          year_1: this.operating_income.year_1 - this.financialCharges.year_1,
          year_2: this.operating_income.year_2 - this.financialCharges.year_2,
          year_3: this.operating_income.year_3 - this.financialCharges.year_3,
          year_4: this.operating_income.year_4 - this.financialCharges.year_4,
          year_5: this.operating_income.year_5 - this.financialCharges.year_5,
        }
      },
      // Calcul des impôts et taxes global
      taxes_result () {
        // ToDo: Complete the proportional sentence
        const proportional = Math.round(0.19 * 12)
        // Patent computation
        const patent = {
          section1: {
            turnover: 50000000,
            amount: 75000 + proportional,
          },
          section2: {
            turnover: 150000000,
            amount: 125000 + proportional,
          },
          section3: {
            turnover: 250000000,
            amount: 175000 + proportional,
          },
          section4: {
            turnover: 500000000,
            amount: 300000 + proportional,
          },
          section5: {
            turnover: 500000000,
            amount: 800000 + proportional,
          },
        }
        // Taxes on VT computation
        // ToDo: complete the sentence
        const vt = {
          year_1: 0,
          year_2: 0,
          year_3: 0,
          year_4: 0,
          year_5: 0,
        }
        // Patent result computation
        const patentResult = {}
        //  year 1
        if (this.turnover_incomes.year_1 < patent.section1.turnover) patentResult.year_1 = patent.section1.amount
        else if (this.turnover_incomes.year_1 < patent.section2.turnover) patentResult.year_1 = patent.section2.amount
        else if (this.turnover_incomes.year_1 < patent.section3.turnover) patentResult.year_1 = patent.section3.amount
        else if (this.turnover_incomes.year_1 < patent.section4.turnover) patentResult.year_1 = patent.section4.amount
        else if (this.turnover_incomes.year_1 > patent.section5.turnover) patentResult.year_1 = patent.section5.amount
        //  year 2
        if (this.turnover_incomes.year_2 < patent.section1.turnover) patentResult.year_2 = patent.section1.amount
        else if (this.turnover_incomes.year_2 < patent.section2.turnover) patentResult.year_2 = patent.section2.amount
        else if (this.turnover_incomes.year_2 < patent.section3.turnover) patentResult.year_2 = patent.section3.amount
        else if (this.turnover_incomes.year_2 < patent.section4.turnover) patentResult.year_2 = patent.section4.amount
        else if (this.turnover_incomes.year_2 > patent.section5.turnover) patentResult.year_2 = patent.section5.amount
        //  year 3
        if (this.turnover_incomes.year_3 < patent.section1.turnover) patentResult.year_3 = patent.section1.amount
        else if (this.turnover_incomes.year_3 < patent.section2.turnover) patentResult.year_3 = patent.section2.amount
        else if (this.turnover_incomes.year_3 < patent.section3.turnover) patentResult.year_3 = patent.section3.amount
        else if (this.turnover_incomes.year_3 < patent.section4.turnover) patentResult.year_3 = patent.section4.amount
        else if (this.turnover_incomes.year_3 > patent.section5.turnover) patentResult.year_3 = patent.section5.amount
        //  year 4
        if (this.turnover_incomes.year_4 < patent.section1.turnover) patentResult.year_4 = patent.section1.amount
        else if (this.turnover_incomes.year_4 < patent.section2.turnover) patentResult.year_4 = patent.section2.amount
        else if (this.turnover_incomes.year_4 < patent.section3.turnover) patentResult.year_4 = patent.section3.amount
        else if (this.turnover_incomes.year_4 < patent.section4.turnover) patentResult.year_4 = patent.section4.amount
        else if (this.turnover_incomes.year_4 > patent.section5.turnover) patentResult.year_4 = patent.section5.amount
        //  year 5
        if (this.turnover_incomes.year_5 < patent.section1.turnover) patentResult.year_5 = patent.section1.amount
        else if (this.turnover_incomes.year_5 < patent.section2.turnover) patentResult.year_5 = patent.section2.amount
        else if (this.turnover_incomes.year_5 < patent.section3.turnover) patentResult.year_5 = patent.section3.amount
        else if (this.turnover_incomes.year_5 < patent.section4.turnover) patentResult.year_5 = patent.section4.amount
        else if (this.turnover_incomes.year_5 > patent.section5.turnover) patentResult.year_5 = patent.section5.amount

        // Return the taxes and dues result
        return {
          patent: patentResult,
          vt: vt,
        }
      },
      // Impôts et taxes
      dues_and_taxes () {
        return {
          year_1: this.taxes_result.patent.year_1 + this.taxes_result.vt.year_1,
          year_2: this.taxes_result.patent.year_2 + this.taxes_result.vt.year_2,
          year_3: this.taxes_result.patent.year_3 + this.taxes_result.vt.year_3,
          year_4: this.taxes_result.patent.year_4 + this.taxes_result.vt.year_4,
          year_5: this.taxes_result.patent.year_5 + this.taxes_result.vt.year_5,
        }
      },
      // Résultat IMF
      imf_result () {
        // IMF computation
        const imf = {
          year_1: 0.05 * this.turnover_incomes.year_1,
          year_2: 0.05 * this.turnover_incomes.year_2,
          year_3: 0.05 * this.turnover_incomes.year_3,
          year_4: 0.05 * this.turnover_incomes.year_4,
          year_5: 0.05 * this.turnover_incomes.year_5,
          min: 500000,
          max: 5000000,
        }
        // IMF result computation
        const imfResult = {}
        // year 1
        if (this.current_income.year_1 > 0) imfResult.year_1 = 0
        else if (imf.year_1 < imf.min) imfResult.year_1 = imf.min
        else if (imf.year_1 > imf.max) imfResult.year_1 = imf.max
        else imfResult.year_1 = imf.year_1
        // year 2
        if (this.current_income.year_2 > 0) imfResult.year_2 = 0
        else if (imf.year_2 < imf.min) imfResult.year_2 = imf.min
        else if (imf.year_2 > imf.max) imfResult.year_2 = imf.max
        else imfResult.year_2 = imf.year_2
        // year 3
        if (this.current_income.year_3 > 0) imfResult.year_3 = 0
        else if (imf.year_3 < imf.min) imfResult.year_3 = imf.min
        else if (imf.year_3 > imf.max) imfResult.year_3 = imf.max
        else imfResult.year_3 = imf.year_3
        // year 4
        if (this.current_income.year_4 > 0) imfResult.year_4 = 0
        else if (imf.year_4 < imf.min) imfResult.year_4 = imf.min
        else if (imf.year_4 > imf.max) imfResult.year_4 = imf.max
        else imfResult.year_4 = imf.year_4
        // year 5
        if (this.current_income.year_5 > 0) imfResult.year_5 = 0
        else if (imf.year_5 < imf.min) imfResult.year_5 = imf.min
        else if (imf.year_5 > imf.max) imfResult.year_5 = imf.max
        else imfResult.year_5 = imf.year_5
        // Return the final result
        return imfResult
      },
      // Impôts sur les sociétés (IS)
      corporate_income_taxes () {
        const result = {}
        // year 1
        if (this.current_income.year_1 <= 0) result.year_1 = this.imf_result.year_1
        else result.year_1 = this.current_income.year_1 * parseFloat(this.hypothesis.tax_rate)
        // year 2
        if (this.current_income.year_2 <= 0) result.year_2 = this.imf_result.year_2
        else result.year_2 = this.current_income.year_2 * parseFloat(this.hypothesis.tax_rate)
        // year 3
        if (this.current_income.year_3 <= 0) result.year_3 = this.imf_result.year_3
        else result.year_3 = this.current_income.year_3 * parseFloat(this.hypothesis.tax_rate)
        // year 4
        if (this.current_income.year_4 <= 0) result.year_4 = this.imf_result.year_4
        else result.year_4 = this.current_income.year_4 * parseFloat(this.hypothesis.tax_rate)
        // year 5
        if (this.current_income.year_5 <= 0) result.year_5 = this.imf_result.year_5
        else result.year_5 = this.current_income.year_5 * parseFloat(this.hypothesis.tax_rate)

        // Return the final result
        return result
      },
      // Résultat net (RN)
      net_income () {
        return {
          year_1: this.current_income.year_1 - this.corporate_income_taxes.year_1,
          year_2: this.current_income.year_2 - this.corporate_income_taxes.year_2,
          year_3: this.current_income.year_3 - this.corporate_income_taxes.year_3,
          year_4: this.current_income.year_4 - this.corporate_income_taxes.year_4,
          year_5: this.current_income.year_5 - this.corporate_income_taxes.year_5,
        }
      },
      // CAF
      caf () {
        return {
          year_1: this.net_income.year_1 + this.deprecation_and_amortization.year_1,
          year_2: this.net_income.year_2 + this.deprecation_and_amortization.year_2,
          year_3: this.net_income.year_3 + this.deprecation_and_amortization.year_3,
          year_4: this.net_income.year_4 + this.deprecation_and_amortization.year_4,
          year_5: this.net_income.year_5 + this.deprecation_and_amortization.year_5,
        }
      },
    },
    watch: {
      turnover_incomes: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('turnoverIncomesUpdate', val)
        },
      },
      production_cost_incomes: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('productionCostIncomesUpdate', val)
        },
      },
      gross_operating_surplus: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('grossOperatingSurplusUpdate', val)
        },
      },
      operating_income: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('operatingIncomeUpdate', val)
        },
      },
      corporate_income_taxes: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('corporateIncomeTaxesUpdate', val)
        },
      },
      net_income: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('netIncomeUpdate', val)
        },
      },
      caf: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('cafUpdate', val)
        },
      },
      added_value: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('addedValueUpdate', val)
        },
      },
    },
  }
</script>

<style scoped>

</style>
