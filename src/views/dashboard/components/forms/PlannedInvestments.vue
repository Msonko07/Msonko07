<template>
  <v-container
    id="planned-investments"
    fluid
    tag="section"
  >
    <v-dialog
      v-model="resizeInvestmentDialog"
      persistent
      max-width="850px"
    >
      <v-card>
        <v-card-text>
          <v-container>
            <v-card-title class="font-weight-regular text-overline primary--text">
              Investissements prévus
              <v-spacer />
              <v-icon
                color="primary"
                @click="incInvestments"
              >
                mdi-plus-box
              </v-icon>
            </v-card-title>
            <v-row
              v-for="(item,i) in resized_investments.length"
              :key="i"
            >
              <v-col
                sm="6"
                lg="2"
                class="pt-0"
              >
                <v-text-field
                  v-model="resized_investments[i].year"
                  label="Année"
                  outlined
                  dense
                />
              </v-col>
              <v-col
                sm="6"
                lg="3"
                class="pt-0"
              >
                <v-text-field
                  v-model="resized_investments[i].wording"
                  label="Libellé"
                  outlined
                  dense
                />
              </v-col>
              <v-col
                sm="6"
                lg="2"
                class="pt-0"
              >
                <v-text-field
                  v-model="resized_investments[i].unit_price"
                  label="Prix unitaire"
                  outlined
                  dense
                />
              </v-col>
              <v-col
                sm="6"
                lg="2"
                class="pt-0"
              >
                <v-text-field
                  v-model="resized_investments[i].quantity"
                  label="Quantité"
                  outlined
                  dense
                />
              </v-col>
              <v-col
                sm="6"
                lg="3"
                class="pt-0"
              >
                <v-select
                  v-model="resized_investments[i].nature"
                  :items="natures"
                  item-text="name"
                  item-value="id"
                  label="Nature"
                  append-outer-icon="mdi-delete-outline"
                  outlined
                  dense
                  @click:append-outer="`${(item > 1) ? decInvestments(i) : ''}`"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="info"
            text
            @click="resizeInvestmentDialog = false"
          >
            Fermer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <base-material-card
      inline
      title="Investissements redimensionnés"
      class="px-5 py-3"
      color="primary"
    >
      <v-row class="pa-0 ma-0">
        <v-spacer />
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              color="info"
              dark
              v-bind="attrs"
              v-on="on"
              @click="resizeInvestmentDialog = true"
            >
              mdi-resize
            </v-icon>
          </template>
          <span>Redimentionner</span>
        </v-tooltip>
      </v-row>
      <v-simple-table fixed-header>
        <thead>
          <tr>
            <th class="primary--text text-overline">
              Année
            </th>
            <th class="primary--text text-overline">
              Intitulé
            </th>
            <th class="primary--text text-overline">
              Nature
            </th>
            <th class="primary--text text-overline">
              Montant Unitaire
            </th>
            <th class="text-right primary--text text-overline">
              Quantité
            </th>
            <th class="text-right primary--text text-overline">
              Année 1
            </th>
            <th class="text-right primary--text text-overline">
              Année 2
            </th>
            <th class="text-right primary--text text-overline">
              Année 3
            </th>
            <th class="text-right primary--text text-overline">
              Année 4
            </th>
            <th class="text-right primary--text text-overline">
              Année 5
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(item,i) in investment_result"
            :key="i"
          >
            <td>{{ item.year }}</td>
            <td>{{ item.wording }}</td>
            <td>{{ natures.find(nature => item.nature === nature.id).name }}</td>
            <td class="text-right">
              {{ item.unit_price | formatNumber }}
            </td>
            <td class="text-right">
              {{ item.quantity | formatNumber }}
            </td>
            <td class="text-right">
              {{ item.year_1 | formatNumber }}
            </td>
            <td class="text-right">
              {{ item.year_2 | formatNumber }}
            </td>
            <td class="text-right">
              {{ item.year_3 | formatNumber }}
            </td>
            <td class="text-right">
              {{ item.year_4 | formatNumber }}
            </td>
            <td class="text-right">
              {{ item.year_5 | formatNumber }}
            </td>
          </tr>
          <tr>
            <td
              colspan="5"
              class="text--primary text-overline text-center"
            >
              Total
            </td>
            <td class="text-right">
              {{ investment_result.reduce((total, current) => total + current.year_1, 0) | formatNumber }}
            </td>
            <td class="text-right">
              {{ investment_result.reduce((total, current) => total + current.year_2, 0) | formatNumber }}
            </td>
            <td class="text-right">
              {{ investment_result.reduce((total, current) => total + current.year_3, 0) | formatNumber }}
            </td>
            <td class="text-right">
              {{ investment_result.reduce((total, current) => total + current.year_4, 0) | formatNumber }}
            </td>
            <td class="text-right">
              {{ investment_result.reduce((total, current) => total + current.year_5, 0) | formatNumber }}
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>

    <!-- Recap table -->
    <!--<base-material-card
      inline
      title="Récaps immo"
      class="px-5 py-3"
      color="primary"
    >
      <v-simple-table fixed-header>
        <thead>
          <tr>
            <th class="primary--text overline">
              Nature
            </th>
            <th class="text-right primary--text overline">
              Année 1
            </th>
            <th class="text-right primary--text overline">
              Année 2
            </th>
            <th class="text-right primary--text overline">
              Année 3
            </th>
            <th class="text-right primary--text overline">
              Année 4
            </th>
            <th class="text-right primary--text overline">
              Année 5
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(item, i) in nature_recaps"
            :key="i"
          >
            <td>{{ natures.find(nature => nature.id === item.id).name }}</td>
            <td class="text-right">
              {{ item.year_1 | formatNumber }}
            </td>
            <td class="text-right">
              {{ item.year_2 | formatNumber }}
            </td>
            <td class="text-right">
              {{ item.year_3 | formatNumber }}
            </td>
            <td class="text-right">
              {{ item.year_4 | formatNumber }}
            </td>
            <td class="text-right">
              {{ item.year_5 | formatNumber }}
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>-->
    <!-- Amortization table -->
    <base-material-card
      inline
      title="Amortissement"
      class="px-5 py-3"
    >
      <v-card-actions>
        <v-spacer />
        <v-col cols="2">
          <v-select
            v-model="amortization"
            :items="items"
            item-text="text"
            item-value="value"
            outlined
            dense
          />
        </v-col>
      </v-card-actions>
      <v-simple-table fixed-header>
        <thead>
          <tr>
            <th class="primary--text text-overline">
              Nature de l'immobilisation
            </th>
            <th class="primary--text text-overline">
              Durée d'amortissement
            </th>
            <th class="text-right primary--text text-overline">
              Année 1
            </th>
            <th class="text-right primary--text text-overline">
              Année 2
            </th>
            <th class="text-right primary--text text-overline">
              Année 3
            </th>
            <th class="text-right primary--text text-overline">
              Année 4
            </th>
            <th class="text-right primary--text text-overline">
              Année 5
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(item,i) in amortization_result"
            :key="i"
          >
            <td>
              {{ natures.find(nature => nature.id === item.id).name }}
            </td>
            <td>
              {{ item.duration_in_year }}
            </td>
            <td class="text-right">
              {{ item.year_1 | formatNumber }}
            </td>
            <td class="text-right">
              {{ item.year_2 | formatNumber }}
            </td>
            <td class="text-right">
              {{ item.year_3 | formatNumber }}
            </td>
            <td class="text-right">
              {{ item.year_4 | formatNumber }}
            </td>
            <td class="text-right">
              {{ item.year_5 | formatNumber }}
            </td>
          </tr>
          <tr>
            <td
              colspan="2"
              class="text--primary text-overline text-center"
            >
              Total
            </td>
            <td class="text-right">
              {{ amortization_result.reduce((total, current) => total + current.year_1, 0) | formatNumber }}
            </td>
            <td class="text-right">
              {{ amortization_result.reduce((total, current) => total + current.year_2, 0) | formatNumber }}
            </td>
            <td class="text-right">
              {{ amortization_result.reduce((total, current) => total + current.year_3, 0) | formatNumber }}
            </td>
            <td class="text-right">
              {{ amortization_result.reduce((total, current) => total + current.year_4, 0) | formatNumber }}
            </td>
            <td class="text-right">
              {{ amortization_result.reduce((total, current) => total + current.year_5, 0) | formatNumber }}
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>
    <v-row>
      <v-col>
        <v-textarea
          v-model="resizing_details"
          label="Raison du redimensionnement des investissement"
          outlined
          dense
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'PlannedInvestments',
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
      investments: {
        type: Array,
        required: true,
      },
      resizing: {
        type: String,
        default: '',
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
        amortization: 1,
        resized_investments: this.investments,
        resizeInvestmentDialog: false,
        resizing_details: this.resizing ? this.resizing : '',
      }
    },
    computed: {
      natures () {
        return this.$store.state.utilities.natures
      },
      // Investissements
      investment_result () {
        const result = []
        this.resized_investments.forEach(item => {
          if (item.nature && item.unit_price && item.year && item.quantity) {
            result.push(
              {
                nature: item.nature,
                wording: 'test',
                year: item.year,
                unit_price: item.unit_price,
                quantity: item.quantity,
                year_1: (parseInt(item.year) === 1) ? item.unit_price * item.quantity : 0,
                year_2: (parseInt(item.year) === 2) ? item.unit_price * item.quantity : 0,
                year_3: (parseInt(item.year) === 3) ? item.unit_price * item.quantity : 0,
                year_4: (parseInt(item.year) === 4) ? item.unit_price * item.quantity : 0,
                year_5: (parseInt(item.year) === 5) ? item.unit_price * item.quantity : 0,
              },
            )
          }
        })
        return result
      },
      nature_recaps () {
        return this.natures.map(item => {
          return {
            id: item.id,
            duration_in_year: item.duration_in_year,
            year_1: this.investment_result.reduce((accumulator, currentValue) => (currentValue.nature === item.id) ? accumulator + currentValue.year_1 : accumulator + 0, 0),
            year_2: this.investment_result.reduce((accumulator, currentValue) => (currentValue.nature === item.id) ? accumulator + currentValue.year_2 : accumulator + 0, 0),
            year_3: this.investment_result.reduce((accumulator, currentValue) => (currentValue.nature === item.id) ? accumulator + currentValue.year_3 : accumulator + 0, 0),
            year_4: this.investment_result.reduce((accumulator, currentValue) => (currentValue.nature === item.id) ? accumulator + currentValue.year_4 : accumulator + 0, 0),
            year_5: this.investment_result.reduce((accumulator, currentValue) => (currentValue.nature === item.id) ? accumulator + currentValue.year_5 : accumulator + 0, 0),
          }
        })
      },
      amortization_result () {
        return this.nature_recaps.filter(item => item.year_1 !== 0 || item.year_2 !== 0 || item.year_3 !== 0 || item.year_4 !== 0 || item.year_5 !== 0).map(item => {
          const result = {
            id: item.id,
            duration_in_year: item.duration_in_year,
          }
          // const amortizationRate = (100 / item.duration_in_year) / 100
          result.year_1 = (item.year_1 !== 0) ? ((item.year_1 / item.duration_in_year)) / this.amortization : 0
          result.year_2 = (item.year_2 !== 0) ? ((item.year_2 / item.duration_in_year)) / this.amortization : 0
          result.year_3 = (item.year_3 !== 0) ? ((item.year_3 / item.duration_in_year)) / this.amortization : 0
          result.year_4 = (item.year_4 !== 0) ? ((item.year_4 / item.duration_in_year)) / this.amortization : 0
          result.year_5 = (item.year_5 !== 0) ? ((item.year_5 / item.duration_in_year)) / this.amortization : 0
          if (result.year_1 !== 0) {
            if (item.duration_in_year < 5) {
              let k = 1
              for (let i = 1; i < 5; i++) {
                if (k < item.duration_in_year) {
                  result['year_' + (i + 1)] += result['year_' + i]
                } else {
                  result['year_' + (i + 1)] = 0
                }
                k++
              }
            } else {
              result.year_2 += result.year_1
              result.year_3 += result.year_2
              result.year_4 += result.year_3
              result.year_5 += result.year_4
            }
          } else if (result.year_2 !== 0) {
            if (item.duration_in_year < 5) {
              let k = 1
              for (let i = 2; i < 5; i++) {
                if (k < item.duration_in_year) {
                  result['year_' + (i + 1)] += result['year_' + i]
                } else {
                  result['year_' + (i + 1)] = 0
                }
                k++
              }
            } else {
              result.year_3 += result.year_2
              result.year_4 += result.year_3
              result.year_5 += result.year_4
            }
          } else if (result.year_3 !== 0) {
            if (item.duration_in_year < 5) {
              let k = 1
              for (let i = 3; i < 5; i++) {
                if (k < item.duration_in_year) {
                  result['year_' + (i + 1)] += result['year_' + i]
                } else {
                  result['year_' + (i + 1)] = 0
                }
                k++
              }
            } else {
              result.year_4 += result.year_3
              result.year_5 += result.year_4
            }
          } else if (result.year_4 !== 0) {
            if (item.duration_in_year < 5) {
              let k = 1
              for (let i = 4; i < 5; i++) {
                if (k < item.duration_in_year) {
                  result['year_' + (i + 1)] += result['year_' + i]
                } else {
                  result['year_' + (i + 1)] = 0
                }
                k++
              }
            } else {
              result.year_5 += result.year_4
            }
          }
          return result
        })
      },
    },
    watch: {
      investment_result: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('investmentUpdate', val)
        },
      },
      amortization_result: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('amortizationUpdate', val)
        },
      },
      resized_investments: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('resizedInvestmentsUpdate', val)
        },
      },
      resizing_details: {
        immediate: true,
        handler (val) {
          this.$emit('resizingDetailsUpdate', val)
        },
      },
    },
    methods: {
      incInvestments () {
        this.resized_investments.push({ year: null, wording: null, unit_price: null, quantity: null, nature: null })
      },
      decInvestments (i) {
        this.resized_investments.splice(i, 1)
      },
    },
  }
</script>

<style scoped>

</style>
