<template>
  <v-container
    id="overrall-cost-of-the-project"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        sm="12"
        lg="7"
      >
        <base-material-card
          inline
          title="Cout du projet"
          class="px-5 py-3"
          color="primary"
        >
          <v-simple-table
            fixed-header
            height="205"
          >
            <thead>
              <tr>
                <th class="primary--text text-overline">
                  #
                </th>
                <th class="primary--text text-right text-overline">
                  Montant (FCFA)
                </th>
                <th class="primary--text text-right text-overline">
                  Apport personnel
                </th>
                <th class="primary--text text-right text-overline">
                  Emprunt
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Investissements</td>
                <td class="text-right">
                  {{ totalInvestment | formatNumber }}
                </td>
                <td class="text-right pt-5">
                  <v-text-field
                    v-model="investmentContributionAmount"
                    dense
                    outlined
                  />
                </td>
                <td class="text-right">
                  {{ investment_loan | formatNumber }}
                </td>
              </tr>
              <tr>
                <td>Besoin Fond de roulement</td>
                <td class="text-right">
                  {{ totalBfrToFinance | formatNumber }}
                </td>
                <td class="text-right pt-5">
                  <v-text-field
                    v-model="amountContributedInBfr"
                    dense
                    outlined
                  />
                </td>
                <td class="text-right">
                  {{ bfr_loan | formatNumber }}
                </td>
              </tr>
              <tr>
                <td
                  class="text-overline text--primary"
                >
                  Total
                </td>
                <td class="text-right">
                  {{ total_amount | formatNumber }}
                </td>
                <td class="text-right">
                  {{ total_contribution | formatNumber }}
                </td>
                <td class="text-right">
                  {{ total_loan | formatNumber }}
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>

      <v-col
        sm="12"
        lg="5"
      >
        <base-material-card
          height="280"
          inline
          title="Modalités du prêt"
          class="px-5 py-3"
          color="primary"
          dense
        >
          <v-card-title>
            Montant emprunté
            <v-spacer />
            {{ total_loan | formatNumber }} XOF
          </v-card-title>
          <v-row>
            <v-col cols="4">
              <v-select
                v-model="capitalization"
                :items="['oui', 'non']"
                label="Capitalisation"
                outlined
                dense
                disabled
              />
            </v-col>
            <v-col cols="4">
              <v-select
                v-model="interest_rate"
                :items="interest_items"
                label="Taux d'intérêt annuel"
                outlined
                dense
              />
            </v-col>
            <v-col cols="4">
              <v-select
                v-model="duration"
                :items="duration_items"
                label="Durée (en mois)"
                outlined
                dense
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-select
                v-model="deadline"
                :items="deadline_items"
                item-value="value"
                item-text="text"
                label="Echéance"
                outlined
                dense
              />
            </v-col>
            <v-col cols="6">
              <v-select
                v-model="deferred"
                :items="deferred_items"
                label="Différé (en mois)"
                outlined
                dense
              />
            </v-col>
          </v-row>
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
          icon="mdi-finance"
          title="Echéancier annuel"
          class="px-5 py-3"
          color="primary"
        >
          <v-simple-table fixed-header>
            <thead>
              <tr>
                <th class="primary--text text-overline">
                  Année
                </th>
                <th class="primary--text text-right text-overline">
                  En cours de début
                </th>
                <th class="primary--text text-right text-overline">
                  Amortissement
                </th>
                <th class="primary--text text-right text-overline">
                  Intérêts
                </th>
                <th class="primary--text text-right text-overline">
                  Remboursement
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="(item,i) in deadline_result"
                :key="i"
              >
                <td>{{ item.year }}</td>
                <td class="text-right">
                  {{ item.rest_of | formatNumber }}
                </td>
                <td class="text-right">
                  {{ item.principal | formatNumber }}
                </td>
                <td class="text-right">
                  {{ item.interest | formatNumber }}
                </td>
                <td class="text-right">
                  {{ item.deadline | formatNumber }}
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>
      <v-col
        sm="12"
        lg="12"
      >
        <base-material-card
          inline
          icon="mdi-finance"
          title="Echéancier"
          class="px-5 py-3"
          color="primary"
        >
          <v-simple-table fixed-header>
            <thead>
              <tr>
                <th class="primary--text text-overline">
                  Mois
                </th>
                <th class="primary--text text-right text-overline">
                  En cours de début
                </th>
                <th class="primary--text text-right text-overline">
                  Amortissement
                </th>
                <th class="primary--text text-right text-overline">
                  Intérêts
                </th>
                <th class="primary--text text-right text-overline">
                  Remboursement
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="(item,i) in repayment_period"
                :key="i"
              >
                <td>{{ item.period }}</td>
                <td class="text-right">
                  {{ item.start | formatNumber }}
                </td>
                <td class="text-right">
                  {{ item.amortization | formatNumber }}
                </td>
                <td class="text-right">
                  {{ item.interest | formatNumber }}
                </td>
                <td class="text-right">
                  {{ item.reimbursement | formatNumber }}
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
    name: 'OverallCostOfTheProject',
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
      totalBfrToFinance: {
        type: Number,
        required: true,
      },
      totalInvestment: {
        type: Number,
        required: true,
      },
      contributedInBfr: {
        type: Number,
        default: 0,
      },
      contributionAmount: {
        type: Number,
        default: 0,
      },
      capitalizationValue: {
        type: String,
        default: 'non',
      },
      interestRateValue: {
        type: Number,
        required: true,
      },
      durationValue: {
        type: Number,
        default: 60,
      },
      deadlineValue: {
        type: Number,
        default: 12,
      },
      deferredValue: {
        type: Number,
        default: 6,
      },
    },
    data () {
      return {
        items: [
          {
            text: 'Années',
            value: 1,
          },
          {
            text: 'Mois',
            value: 12,
          },
        ],
        amountContributedInBfr: this.contributedInBfr,
        investmentContributionAmount: this.contributionAmount,
        capitalization: this.capitalizationValue,
        interest_rate: this.interestRateValue,
        duration_in_year: 5,
        duration: this.durationValue,
        deadline: this.deadlineValue,
        deferred: this.deferredValue,
        interest_items: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
        duration_items: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
          31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
        ],
        deadline_items: [
          { text: 'hebdomadaire', value: 52 },
          { text: 'mensuel', value: 12 },
          { text: 'trimestriel', value: 4 },
          { text: 'semestriel', value: 2 },
          { text: 'journalier', value: 360 },
        ],
        deferred_items: [1, 2, 3, 4, 5, 6],
      }
    },
    computed: {
      deferred_result () {
        if (this.deadline === 12) {
          return this.deferred
        } else {
          return this.deferred / 12
        }
      },
      /*
      duration_result () {
        if (this.deadline === 12) {
          return (12 * this.duration_in_year) + this.deferred
        } else {
          return this.duration_in_year + (this.deferred / 12)
        }
      },
      */
      duration_result () {
        if (this.deadline === 12) {
          return (12 * (this.duration / 12)) + this.deferred
        } else {
          return (this.duration / 12) + (this.deferred / 12)
        }
      },
      total_cost () {
        return this.totalBfrToFinance + this.totalInvestment
      },
      investment_loan () {
        return this.totalInvestment - this.investmentContributionAmount
      },
      bfr_loan () {
        return this.totalBfrToFinance - this.amountContributedInBfr
      },
      total_amount () {
        return this.totalInvestment + this.totalBfrToFinance
      },
      total_contribution () {
        return parseInt(this.investmentContributionAmount) + parseInt(this.amountContributedInBfr)
      },
      total_loan () {
        return this.investment_loan + this.bfr_loan
      },
      /*
      deadline_result () {
        const temp = (this.duration === 1) ? 'Année ' : 'Mois '
        const rate = this.interest_rate / 100 / parseInt(this.duration)
        const deadline = Math.round(this.total_loan * (rate / (1 - Math.pow(1 + rate, -this.duration))))
        let interest = Math.round(this.total_loan * rate)
        let principal = deadline - interest
        let restOf = parseInt(this.total_loan)
        const result = [
          {
            year: temp + '1',
            rest_of: restOf,
            interest: interest,
            deadline: deadline,
            principal: principal,
          },
        ]
        for (let i = 1; i < this.duration; i++) {
          const index = i + 1
          interest = Math.round((restOf - principal) * rate)
          restOf = restOf - principal
          principal = deadline - interest
          result.push(
            {
              year: temp + index,
              rest_of: restOf,
              interest: interest,
              deadline: deadline,
              principal: principal,
            },
          )
        }
        return result
      },
      */
      // Période de cumul
      accumulation_period () {
        let period = 1
        if (this.deadline !== 12) {
          period = parseFloat((1 / this.deadline).toPrecision(10))
        }
        const startPeriod = (this.deadline !== 12) ? parseFloat((1 / this.deadline).toPrecision(10)) : 1
        let start = (period <= this.deferred_result) ? this.total_loan : 0
        let interest = start * (this.interest_rate / 100 / this.deadline)
        const result = [
          {
            period: startPeriod,
            start_amount: start,
            interest: interest,
          },
        ]
        for (let i = startPeriod; i < this.deferred_result; i++) {
          period = period + startPeriod
          start = start + interest
          interest = start * (this.interest_rate / 100 / this.deadline)
          result.push({
            period: period,
            start_amount: start,
            interest: interest,
          })
        }
        return result
      },
      // Période de remboursement
      repayment_period () {
        const incPeriod = (this.deadline !== 12) ? parseFloat((1 / this.deadline).toPrecision(10)) : 1
        const startCount = this.accumulation_period.length + 1
        let startPeriod = (this.deadline !== 12) ? parseFloat((startCount / this.deadline).toPrecision(10)) : startCount
        let startOfYear = parseInt(this.total_loan)
        if (this.capitalization === 'oui') {
          startOfYear = startOfYear + (this.accumulation_period.reduce((accumulator, currentValue) => accumulator + currentValue.interest, 0))
        }
        const toDivide = (this.deadline !== 12) ? 1 : 12
        let interest = startOfYear * (this.interest_rate / 100 / this.deadline)
        // Durée amortissement
        const amortisationPeriod = this.duration_result - this.deferred_result
        const reimbursement = startOfYear * ((this.interest_rate / 100 / this.deadline) / (1 - Math.pow(1 + (this.interest_rate / 100 / this.deadline), -(amortisationPeriod * this.deadline / toDivide))))
        let amortization = reimbursement - interest
        const result = [
          {
            period: startPeriod,
            start: startOfYear,
            amortization: amortization,
            interest: interest,
            reimbursement: reimbursement,
          },
        ]
        for (let i = startPeriod; i < this.duration_result; i = i + incPeriod) {
          startOfYear = startOfYear - amortization
          interest = startOfYear * (this.interest_rate / 100 / this.deadline)
          amortization = reimbursement - interest
          startPeriod = startPeriod + incPeriod
          result.push({
            period: startPeriod,
            start: startOfYear,
            amortization: amortization,
            interest: interest,
            reimbursement: reimbursement,
          })
        }
        return result
      },
      // Remboursement annuelle "annual_repayment"
      deadline_result () {
        const incPeriod = (this.deadline !== 12) ? parseFloat((1 / this.deadline).toPrecision(10)) : 1
        let incCount = (this.deadline !== 12) ? 1 : 12
        let startCount = 0
        const toInc = (this.deadline !== 12) ? 1 : 12
        const result = []
        let restOf = this.repayment_period[0].start
        for (let i = 0; i < (this.duration / 12) + 1; i++) {
          const year = 'Année ' + (i + 1)
          let interest = 0
          let deadline = 0
          let principal = 0
          this.repayment_period.forEach(async (item) => {
            if (item.period >= startCount && item.period <= incCount) {
              interest += item.interest
              deadline += item.reimbursement
              principal += item.amortization
            }
            /*
            if (i > 0 && item.period === ((incCount - toInc) + incPeriod)) {
              restOf = item.start
            }
            */
          })
          if (i > 0) {
            restOf = restOf - result[(i - 1)].principal
          }
          if (principal !== 0) {
            result.push(
              {
                year: year,
                rest_of: restOf,
                interest: interest,
                deadline: deadline,
                principal: principal,
              },
            )
          }
          startCount = incCount + incPeriod
          incCount += toInc
        }
        return result
      },
    },
    watch: {
      deadline_result: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('deadlineResultUpdate', val)
        },
      },
      total_loan: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('totalLoanUpdate', val)
        },
      },
      total_cost: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('totalCostUpdate', val)
        },
      },
      total_contribution: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('totalContributionUpdate', val)
        },
      },
      capitalization: {
        immediate: true,
        handler (val) {
          this.$emit('capitalizationUpdate', val)
        },
      },
      interest_rate: {
        immediate: true,
        handler (val) {
          this.$emit('interestRateUpdate', val)
        },
      },
      duration: {
        immediate: true,
        handler (val) {
          this.$emit('durationUpdate', val)
        },
      },
      deadline: {
        immediate: true,
        handler (val) {
          this.$emit('deadlineUpdate', val)
        },
      },
      deferred: {
        immediate: true,
        handler (val) {
          this.$emit('deferredUpdate', val)
        },
      },
      amountContributedInBfr: {
        immediate: true,
        handler (val) {
          this.$emit('amountContributedInBfrUpdate', val)
        },
      },
      investmentContributionAmount: {
        immediate: true,
        handler (val) {
          this.$emit('investmentContributionAmountUpdate', val)
        },
      },
    },
  }
</script>

<style scoped>

</style>
