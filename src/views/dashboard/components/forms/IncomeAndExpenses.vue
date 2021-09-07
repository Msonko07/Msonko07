<template>
  <v-container
    id="income-and-expenses"
    fluid
    tag="section"
  >
    <!-- Resize dialog section -->
    <!-- Turnover dialog -->
    <v-dialog
      v-model="resizeTurnoverDialog"
      persistent
      max-width="850px"
    >
      <v-card>
        <v-card-text>
          <v-container>
            <v-card-title class="font-weight-regular text-overline primary--text">
              Chiffre d'affaire mensuel
              <v-spacer />
              <v-icon
                color="primary"
                @click="incTurnover"
              >
                mdi-plus-box
              </v-icon>
            </v-card-title>
            <v-row
              v-for="(item,i) in turnover.length"
              :key="i"
            >
              <v-col
                sm="6"
                lg="3"
                class="pt-0"
              >
                <v-text-field
                  v-model="turnover[i].year"
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
                  v-model="turnover[i].wording"
                  label="Libellé"
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
                  v-model="turnover[i].unit_price"
                  label="Prix unitaire"
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
                  v-model="turnover[i].quantity"
                  label="Quantité"
                  append-outer-icon="mdi-delete-outline"
                  outlined
                  dense
                  @click:append-outer="`${(item > 1) ? decTurnover(i) : ''}`"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="resizeTurnoverDialog = false"
          >
            Fermer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Personal charge dialog -->
    <v-dialog
      v-model="resizePersonalDialog"
      persistent
      max-width="850px"
    >
      <v-card>
        <v-card-text>
          <v-container>
            <v-card-title class="font-weight-regular text-overline primary--text">
              Charges personnel
              <v-spacer />
              <v-icon
                color="primary"
                @click="incPersonal"
              >
                mdi-plus-box
              </v-icon>
            </v-card-title>
            <v-row
              v-for="(item,i) in personalCharges.length"
              :key="i"
            >
              <v-col
                sm="6"
                lg="3"
                class="pt-0"
              >
                <v-text-field
                  v-model="personalCharges[i].position_type"
                  label="Type de poste"
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
                  v-model="personalCharges[i].role"
                  label="Fonction"
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
                  v-model="personalCharges[i].number_of_employees"
                  label="Nombre de personne"
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
                  v-model="personalCharges[i].net_salary"
                  label="Salaire Net"
                  append-outer-icon="mdi-delete-outline"
                  outlined
                  dense
                  @click:append-outer="`${(item > 1) ? decPersonal(i) : ''}`"
                />
              </v-col>
              <!--<v-col
                sm="6"
                lg="3"
                class="pt-0"
              >
                <v-text-field
                  v-model="personalCharges[i].description"
                  label="Description"
                />
              </v-col>-->
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="resizePersonalDialog = false"
          >
            Fermer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- production cost dialog -->
    <v-dialog
      v-model="resizeProductionDialog"
      persistent
      max-width="850px"
    >
      <v-card>
        <v-card-text>
          <v-container>
            <v-card-title class="font-weight-regular text-overline primary--text">
              Coûts de production
              <v-spacer />
              <v-icon
                color="primary"
                @click="incProduction"
              >
                mdi-plus-box
              </v-icon>
            </v-card-title>
            <v-row
              v-for="(item,i) in productionCosts.length"
              :key="i"
            >
              <v-col
                sm="6"
                lg="3"
                class="pt-0"
              >
                <v-text-field
                  v-model="productionCosts[i].year"
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
                  v-model="productionCosts[i].wording"
                  label="Libellé"
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
                  v-model="productionCosts[i].unit_production_cost"
                  label="Prix unitaire"
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
                  v-model="productionCosts[i].quantity"
                  label="Quantité"
                  append-outer-icon="mdi-delete-outline"
                  outlined
                  dense
                  @click:append-outer="`${(item > 1) ? decProduction(i) : ''}`"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="resizeProductionDialog = false"
          >
            Fermer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- external charge dialog -->
    <v-dialog
      v-model="resizeExternalDialog"
      persistent
      max-width="850px"
    >
      <v-card>
        <v-card-text>
          <v-container>
            <v-card-title class="font-weight-regular text-overline primary--text">
              Charges externes
              <v-spacer />
              <v-icon
                color="primary"
                @click="incExternal"
              >
                mdi-plus-box
              </v-icon>
            </v-card-title>
            <v-row
              v-for="(item,i) in externalCharges.length"
              :key="i"
            >
              <v-col
                sm="6"
                lg="3"
                class="pt-0"
              >
                <v-text-field
                  v-model="externalCharges[i].year"
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
                  v-model="externalCharges[i].wording"
                  label="Libellé"
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
                  v-model="externalCharges[i].unit_price"
                  label="Prix unitaire"
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
                  v-model="externalCharges[i].quantity"
                  label="Quantité"
                  append-outer-icon="mdi-delete-outline"
                  outlined
                  dense
                  @click:append-outer="`${(item > 1) ? decExternal(i) : ''}`"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="resizeExternalDialog = false"
          >
            Fermer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- ENd of resize dialog section -->
    <v-row>
      <v-col
        sm="12"
        lg="6"
      >
        <base-material-card
          inline
          icon="mdi-clipboard-text"
          title="Chiffre d'affaire"
          class="px-5 py-3"
          color="success"
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
                  @click="resizeTurnoverDialog = true"
                >
                  mdi-resize
                </v-icon>
              </template>
              <span>Redimentionner</span>
            </v-tooltip>
          </v-row>
          <v-simple-table
            height="180"
            fixed-header
          >
            <thead>
              <tr>
                <th class="primary--text text-overline">
                  Produits et /ou services vendus
                </th>
                <th class="primary--text text-right text-overline">
                  Quantité mensuelle vendue
                </th>
                <th class="primary--text text-right text-overline">
                  Prix unitaire (FCFA)
                </th>
                <th class="primary--text text-right text-overline">
                  Chiffre d'affaires mensuel (FCFA)
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="(item,i) in turnover_result"
                :key="i"
              >
                <td>{{ item.wording }}</td>
                <td class="text-right">
                  {{ item.quantity | formatNumber }}
                </td>
                <td class="text-right">
                  {{ item.unit_price | formatNumber }}
                </td>
                <td class="text-right">
                  {{ item.monthly_turnover | formatNumber }}
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>

      <v-col
        sm="12"
        lg="6"
      >
        <base-material-card
          inline
          icon="mdi-clipboard-text"
          title="Charges du personnel"
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
                  @click="resizePersonalDialog = true"
                >
                  mdi-resize
                </v-icon>
              </template>
              <span>Redimentionner</span>
            </v-tooltip>
          </v-row>
          <v-simple-table
            fixed-header
            height="180"
          >
            <thead>
              <tr>
                <th class="primary--text text-overline">
                  Poste
                </th>
                <th class="primary--text text-overline">
                  Foncton
                </th>
                <th class="primary--text text-overline">
                  Nombre
                </th>
                <th class="primary--text text-overline">
                  Salaire mensuel net
                </th>
                <th class="text-right primary--text text-overline">
                  Total Charges Salariales
                </th>
                <th class="text-right primary--text text-overline">
                  BFR à financer ({{ hypothesis.bfr_in_months }} mois)
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="(item,i) in personal_result"
                :key="i"
              >
                <td>
                  {{ item.position_type }}
                </td>
                <td>
                  {{ item.role }}
                </td>
                <td
                  class="text-right"
                >
                  {{ item.number_of_employees | formatNumber }}
                </td>
                <td
                  class="text-right"
                >
                  {{ item.net_salary | formatNumber }}
                </td>
                <td
                  class="text-right"
                >
                  {{ item.monthly_charge | formatNumber }}
                </td>
                <td
                  class="text-right"
                >
                  {{ item. bfr_to_finance | formatNumber }}
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
        lg="6"
      >
        <base-material-card
          inline
          icon="mdi-clipboard-text"
          title="Coûts de production"
          class="px-5 py-3"
          color="brown lighten-1"
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
                  @click="resizeProductionDialog = true"
                >
                  mdi-resize
                </v-icon>
              </template>
              <span>Redimentionner</span>
            </v-tooltip>
          </v-row>
          <v-simple-table
            fixed-header
            height="180"
          >
            <thead>
              <tr>
                <th class="primary--text text-overline">
                  Matières premières et/ou marchandises
                </th>
                <th class="primary--text text-right text-overline">
                  Quantité mensuelle
                </th>
                <th class="primary--text text-right text-overline">
                  Prix unitaire (FCFA)
                </th>
                <th class="primary--text text-right text-overline">
                  Montant Total
                </th>
                <th class="primary--text text-right text-overline">
                  BFR à financer ({{ hypothesis.bfr_in_months }} mois)
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="(item,i) in production_result"
                :key="i"
              >
                <td>
                  {{ item.wording }}
                </td>
                <td class="text-right">
                  {{ item.quantity | formatNumber }}
                </td>
                <td class="text-right">
                  {{ item.unit_price | formatNumber }}
                </td>
                <td class="text-right">
                  {{ item.monthly_cost | formatNumber }}
                </td>
                <td class="text-right">
                  {{ item.bfr_to_finance | formatNumber }}
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>

      <v-col
        sm="12"
        lg="6"
      >
        <base-material-card
          inline
          icon="mdi-clipboard-text"
          title="Charges externes"
          class="px-5 py-3"
          color="brown"
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
                  @click="resizeExternalDialog = true"
                >
                  mdi-resize
                </v-icon>
              </template>
              <span>Redimentionner</span>
            </v-tooltip>
          </v-row>
          <v-simple-table
            fixed-header
            height="180"
          >
            <thead>
              <tr>
                <th class="primary--text text-overline">
                  Charges
                </th>
                <th class="primary--text text-overline">
                  Quantité Mensuelle
                </th>
                <th class="primary--text text-overline">
                  Prix Unitaire
                </th>
                <th class="text-right primary--text text-overline">
                  Montant mensuel
                </th>
                <th class="text-right primary--text text-overline">
                  BFR à financer ({{ hypothesis.bfr_in_months }} mois)
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="(item,i) in external_result"
                :key="i"
              >
                <td>
                  {{ item.wording }}
                </td>
                <td
                  class="text-right"
                >
                  {{ item.quantity | formatNumber }}
                </td>
                <td
                  class="text-right"
                >
                  {{ item.unit_price | formatNumber }}
                </td>
                <td
                  class="text-right"
                >
                  {{ item.monthly_charge | formatNumber }}
                </td>
                <td
                  class="text-right"
                >
                  {{ item.bfr_to_finance | formatNumber }}
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-textarea
          v-model="cost_resizing_details"
          label="Raison du redimensionnement des coûts"
          outlined
          dense
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'IncomeAndExpenses',
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
      turnover: {
        type: Array,
        required: true,
      },
      externalCharges: {
        type: Array,
        required: true,
      },
      personalCharges: {
        type: Array,
        required: true,
      },
      productionCosts: {
        type: Array,
        required: true,
      },
      hypothesis: {
        type: Object,
        required: true,
      },
      resizing: {
        type: String,
        default: '',
      },
    },
    data () {
      return {
        cost_resizing_details: this.resizing ? this.resizing : '',
        resizeTurnoverDialog: false,
        resizeExternalDialog: false,
        resizePersonalDialog: false,
        resizeProductionDialog: false,
      }
    },
    computed: {
      turnover_result () {
        return this.turnover.map(item => {
          return {
            wording: item.wording,
            year: item.year,
            quantity: item.quantity,
            unit_price: item.unit_price,
            monthly_turnover: item.unit_price * item.quantity,
          }
        })
      },
      personal_result () {
        return this.personalCharges.map(item => {
          return {
            position_type: item.position_type,
            role: item.role,
            number_of_employees: item.number_of_employees,
            net_salary: item.net_salary,
            monthly_charge: item.net_salary * item.number_of_employees,
            bfr_to_finance: (item.net_salary * item.number_of_employees) * parseInt(this.hypothesis.bfr_in_months),
          }
        })
      },
      external_result () {
        return this.externalCharges.map(item => {
          return {
            wording: item.wording,
            quantity: item.quantity,
            unit_price: item.unit_price,
            monthly_charge: item.unit_price * item.quantity,
            bfr_to_finance: (item.unit_price * item.quantity) * parseInt(this.hypothesis.bfr_in_months),
          }
        })
      },
      production_result () {
        return this.productionCosts.map(item => {
          return {
            wording: item.wording,
            quantity: item.quantity,
            unit_price: item.unit_production_cost,
            monthly_cost: item.unit_production_cost * item.quantity,
            bfr_to_finance: (item.unit_production_cost * item.quantity) * parseInt(this.hypothesis.bfr_in_months),
          }
        })
      },
    },
    watch: {
      turnover: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('turnoverUpdate', val)
        },
      },
      externalCharges: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('externalChargesUpdate', val)
        },
      },
      personalCharges: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('personalChargesUpdate', val)
        },
      },
      productionCosts: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('productionCostsUpdate', val)
        },
      },
      cost_resizing_details: {
        immediate: true,
        handler (val) {
          this.$emit('costResizingDetailsUpdate', val)
        },
      },
      turnover_result: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('turnoverResultUpdate', val)
        },
      },
      personal_result: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('personalChargeResultUpdate', val)
        },
      },
      external_result: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('externalChargeResultUpdate', val)
        },
      },
      production_result: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('productionCostResultUpdate', val)
        },
      },
    },
    methods: {
      incTurnover () {
        this.turnover.push({ year: null, wording: null, unit_price: null, quantity: null })
      },
      decTurnover (i) {
        this.turnover.splice(i, 1)
      },
      incPersonal () {
        this.personalCharges.push({ position_type: null, role: null, number_of_employees: null, net_salary: null, description: null })
      },
      decPersonal (i) {
        this.personalCharges.splice(i, 1)
      },
      incExternal () {
        this.externalCharges.push({ year: null, wording: null, unit_price: null, quantity: null })
      },
      decExternal (i) {
        this.personalCharges.splice(i, 1)
      },
      incProduction () {
        this.productionCosts.push({ year: null, wording: null, unit_price: null, quantity: null })
      },
      decProduction (i) {
        this.productionCosts.splice(i, 1)
      },
    },
  }
</script>

<style scoped>

</style>
