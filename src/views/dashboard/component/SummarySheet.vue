<template>
  <v-container
    id="summarySheet"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <base-material-card
        color="primary"
        inline
        title="Entreprise et personnes clés"
        class="px-5 py-2 mb-5"
        width="750px"
      >
        <v-simple-table>
          <tbody>
            <tr>
              <td class="text-overline">
                Intitulé du projet
              </td>
              <td>
                {{
                  (project.analysis && project.analysis.analysis && project.analysis.analysis.result && project.analysis.analysis.result.input) ?
                    project.analysis.analysis.result.input.qualitative_result.projectEntitled
                    :
                    ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Objet de la demande
              </td>
              <td>
                {{
                  (project.analysis && project.analysis.analysis && project.analysis.analysis.result && project.analysis.analysis.result.input) ?
                    project.analysis.analysis.result.input.qualitative_result.subjectOfTheRequest
                    :
                    ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Montant de la demande
              </td>
              <td>
                {{
                  (project.analysis && project.analysis.analysis && project.analysis.analysis.result && project.analysis.analysis.result.input) ?
                    project.analysis.analysis.result.input.qualitative_result.amountRequest
                    :
                    ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Forme Juridique
              </td>
              <td>
                {{
                  (project.recipient.legal_form.formalized) ?
                    project.recipient.legal_form.corporate.type
                    :
                    'Non formalisé'
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Promoteur
              </td>
              <td>
                {{ project.recipient.firstname }} {{ project.recipient.lastname }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Age du promoteur
              </td>
              <td>{{ project.recipient.date_of_birth | getAge }} ans</td>
            </tr>
            <tr>
              <td class="text-overline">
                Capital
              </td>
              <td>
                {{
                  (project.analysis && project.analysis.analysis && project.analysis.analysis.result && project.analysis.analysis.result.input) ?
                    project.analysis.analysis.result.input.qualitative_result.capital
                    :
                    ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Actionnariat (Répartition du capital)
              </td>
              <td>
                {{
                  (project.analysis && project.analysis.analysis && project.analysis.analysis.result && project.analysis.analysis.result.input) ?
                    project.analysis.analysis.result.input.qualitative_result.shareholding
                    :
                    ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Présentation équipe dirigeante
              </td>
              <td>
                {{
                  (project.analysis && project.analysis.review && project.analysis.review.result) ?
                    project.analysis.review.result.management_team
                    :
                    ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Accompagnement sur le projet
              </td>
              <td>
                {{
                  (project.analysis && project.analysis.review && project.analysis.review.result) ?
                    project.analysis.review.result.project_support
                    :
                    ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Implication du promoteur dans la gestion du projet et implication financière
              </td>
              <td>
                {{
                  (project.analysis && project.analysis.review && project.analysis.review.result) ?
                    project.analysis.review.result.promoter_involvement
                    :
                    ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Engagements de l'entreprise et du promoteur
              </td>
              <td>
                {{
                  (project.analysis && project.analysis.review && project.analysis.review.result) ?
                    project.analysis.review.result.promoter_commitment
                    :
                    ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Nombre d'emplois actuels
              </td>
              <td>{{}}</td>
            </tr>
            <tr>
              <td class="text-overline">
                Création d'emplois
              </td>
              <td>
                {{
                  (project.analysis && project.analysis.analysis && project.analysis.analysis.result && project.analysis.analysis.result.input) ?
                    project.analysis.analysis.result.input.qualitative_result.numberOfJobsToBeCreated
                    :
                    ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Visite et / ou entretien effectué
              </td>
              <td>
                {{
                  (project.analysis && project.analysis.analysis && project.analysis.analysis.result && project.analysis.analysis.result.input) ?
                    project.analysis.analysis.result.input.qualitative_result.siteVisit
                    :
                    ''
                }}
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </base-material-card>
    </v-row>
    <v-row justify="center">
      <base-material-card
        color="primary"
        inline
        title="Activité"
        class="px-5 py-1 my-5"
        width="750px"
      >
        <v-simple-table>
          <tbody>
            <tr>
              <td class="text-overline">
                Présentation de l'activité et du projet
              </td>
              <td>
                {{
                  (project.analysis && project.analysis.review && project.analysis.review.result) ?
                    project.analysis.review.result.activity_presentation
                    :
                    ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Analyse du secteur
              </td>
              <td>
                {{
                  (project.analysis && project.analysis.review && project.analysis.review.result) ?
                    project.analysis.review.result.sector_analysis
                    :
                    ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Produits et services proposés
              </td>
              <td>
                {{
                  (project.analysis && project.analysis.review && project.analysis.review.result) ?
                    project.analysis.review.result.product_or_service
                    :
                    ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Clientèle
              </td>
              <td>
                {{
                  (project.analysis && project.analysis.review && project.analysis.review.result) ?
                    project.analysis.review.result.customers
                    :
                    ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Stratégie commerciale
              </td>
              <td>
                {{
                  (project.analysis && project.analysis.review && project.analysis.review.result) ?
                    project.analysis.review.result.commercial_strategy
                    :
                    ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Fournisseurs
              </td>
              <td>
                {{
                  (project.analysis && project.analysis.review && project.analysis.review.result) ?
                    project.analysis.review.result.suppliers
                    :
                    ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Concurrence
              </td>
              <td>
                {{
                  (project.analysis && project.analysis.review && project.analysis.review.result) ?
                    project.analysis.review.result.competitors
                    :
                    ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Analyse de l'historique
              </td>
              <td>
                {{
                  (project.analysis && project.analysis.review && project.analysis.review.result) ?
                    project.analysis.review.result.historical_analysis
                    :
                    ''
                }}
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </base-material-card>
    </v-row>
    <v-row justify="center">
      <base-material-card
        color="primary"
        inline
        title="Programme d'investissement et Plan de financement"
        class="px-5 py-1 my-5"
        width="750px"
      >
        <v-simple-table>
          <tbody>
            <tr>
              <td class="text-overline">
                Montant des investissements déjà réalisés
              </td>
              <td>
                {{
                  (project.analysis && project.analysis.analysis && project.analysis.analysis.result && project.analysis.analysis.result.input) ?
                    project.analysis.analysis.result.input.qualitative_result.amountInvestmentsMade
                    :
                    ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Raison du redimensionnement des investissements
              </td>
              <td>
                {{
                  (project.analysis && project.analysis.analysis && project.analysis.analysis.result && project.analysis.analysis.result.input) ?
                    project.analysis.analysis.result.input.resizing_details
                    :
                    ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Raison du redimensionnement des coûts
              </td>
              <td>
                {{
                  (project.analysis && project.analysis.analysis && project.analysis.analysis.result && project.analysis.analysis.result.input) ?
                    project.analysis.analysis.result.input.resizing_details
                    :
                    ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Investissements proposés
              </td>
              <td>
                {{
                  ((project.analysis && project.analysis.analysis && project.analysis.analysis.result && project.analysis.analysis.result.output) ?
                    project.analysis.analysis.result.output.total_investments.year_1
                    :
                    0)
                    | formatNumber
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                BFR proposé
              </td>
              <td>
                {{
                  ((project.analysis && project.analysis.analysis && project.analysis.analysis.result && project.analysis.analysis.result.output) ?
                    project.analysis.analysis.result.output.total_bfr_to_finance
                    :
                    0)
                    | formatNumber
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Coût du projet
              </td>
              <td>
                {{
                  (
                    ((project.analysis && project.analysis.analysis && project.analysis.analysis.result && project.analysis.analysis.result.output && project.analysis.analysis.result.output.total_investments)
                      ?
                        project.analysis.analysis.result.output.total_investments.year_1
                      :
                        0)
                    +
                    ((project.analysis && project.analysis.analysis && project.analysis.analysis.result && project.analysis.analysis.result.output)
                      ?
                        project.analysis.analysis.result.output.total_bfr_to_finance
                      :
                        0)
                  )
                      | formatNumber
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Apport
              </td>
              <td>
                {{
                  ((project.analysis && project.analysis.analysis && project.analysis.analysis.result && project.analysis.analysis.result.output) ?
                    project.analysis.analysis.result.output.total_contribution_amount
                    : 0)
                    | formatNumber
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Emprunt
              </td>
              <td>
                {{
                  ((project.analysis && project.analysis.analysis && project.analysis.analysis.result && project.analysis.analysis.result.output)
                    ?
                      project.analysis.analysis.result.output.total_loan
                    :
                      0)
                    | formatNumber
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Garanties
              </td>
              <td>
                {{
                  (project.analysis && project.analysis.analysis && project.analysis.analysis.result && project.analysis.analysis.result.input && project.analysis.analysis.result.input.qualitative_result)
                    ?
                      project.analysis.analysis.result.input.qualitative_result.guarantees
                    :
                      ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Plan de décaissement
              </td>
              <td
                v-if="project.analysis &&
                  project.analysis.analysis &&
                  project.analysis.analysis.result &&
                  project.analysis.analysis.result.input &&
                  project.analysis.analysis.result.input.qualitative_result"
              >
                <span
                  v-for="(item, i) in project.analysis.analysis.result.input.qualitative_result.disbursementPlan"
                  :key="i"
                >
                  <strong v-if="item">{{ i + 1 }} : </strong> {{ item }} <br>
                </span>
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Total
              </td>
              <td>
                {{
                  ((project.analysis && project.analysis.analysis && project.analysis.analysis.result && project.analysis.analysis.result.output)
                    ?
                      project.analysis.analysis.result.output.total_contribution_amount + project.analysis.analysis.result.output.total_loan
                    :
                      0)
                    | formatNumber
                }}
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </base-material-card>
    </v-row>
    <v-row justify="center">
      <base-material-card
        color="primary"
        inline
        title="Compte d'exploitation prévisionnel"
        class="px-5 py-1 my-5"
        width="750px"
      >
        <v-simple-table>
          <tbody>
            <tr>
              <td class="text-overline">
                Chiffre d'affaires (année 1)
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.analysis &&
                    project.analysis.analysis.result &&
                    project.analysis.analysis.result.output &&
                    project.analysis.analysis.result.output.turnover_incomes &&
                    Object.keys(project.analysis.analysis.result.output.turnover_incomes).length
                      ?
                        project.analysis.analysis.result.output.turnover_incomes.year_1
                      :
                        0
                  ) | formatNumber
                }} XOF
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Excédent Brut d'Exploitation (année 1)
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.analysis &&
                    project.analysis.analysis.result &&
                    project.analysis.analysis.result.output &&
                    project.analysis.analysis.result.output.gross_operating_surplus &&
                    Object.keys(project.analysis.analysis.result.output.gross_operating_surplus).length
                      ?
                        project.analysis.analysis.result.output.gross_operating_surplus.year_1
                      :
                        0
                  ) | formatNumber
                }} XOF
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Résultat Net (année 1)
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.analysis &&
                    project.analysis.analysis.result &&
                    project.analysis.analysis.result.output &&
                    project.analysis.analysis.result.output.net_income &&
                    Object.keys(project.analysis.analysis.result.output.net_income).length
                      ?
                        project.analysis.analysis.result.output.net_income.year_1
                      :
                        0
                  ) | formatNumber
                }} XOF
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                CAF (année 1)
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.analysis &&
                    project.analysis.analysis.result &&
                    project.analysis.analysis.result.output &&
                    project.analysis.analysis.result.output.caf &&
                    Object.keys(project.analysis.analysis.result.output.caf).length
                      ?
                        project.analysis.analysis.result.output.caf.year_1
                      :
                        0
                  ) | formatNumber
                }} XOF
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Analyse des données prévisionnelles
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.review &&
                    project.analysis.review.result
                      ?
                        project.analysis.review.result.forecast_data
                      :
                        0
                  ) | formatNumber
                }} XOF
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </base-material-card>
    </v-row>
    <v-row justify="center">
      <base-material-card
        color="primary"
        inline
        title="Avis DI"
        class="px-5 py-1 my-5"
        width="750px"
      >
        <v-simple-table>
          <tbody>
            <tr>
              <td class="text-overline">
                Avis motivé
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.review &&
                    project.analysis.review.result.financial_advice
                  )
                    ?
                      project.analysis.review.result.financial_advice
                    :
                      ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Montant (XOF)
              </td>
              <td>
                {{
                  (
                    (
                      project.analysis &&
                      project.analysis.review &&
                      project.analysis.review.result
                    )
                      ?
                        project.analysis.review.result.amount
                      :
                        0
                  ) | formatNumber
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Taux d'intérêt
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.review &&
                    project.analysis.review.result
                  )
                    ?
                      project.analysis.review.result.interest_rate
                    :
                      ''
                }}%
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Durée (mois)
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.review &&
                    project.analysis.review.result
                  )
                    ?
                      project.analysis.review.result.duration
                    :
                      ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Échéance
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.review &&
                    project.analysis.review.result
                  )
                    ?
                      project.analysis.review.result.deadline
                    :
                      ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Différé (en mois)
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.review &&
                    project.analysis.review.result
                  )
                    ?
                      project.analysis.review.result.deferred
                    :
                      ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Garanties
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.review &&
                    project.analysis.review.result
                  )
                    ?
                      project.analysis.review.result.guarantees
                    :
                      ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Plan de décaissement
              </td>
              <td
                v-if="project.analysis &&
                  project.analysis.review &&
                  project.analysis.review.result &&
                  project.analysis.review.result.disbursement_plan"
              >
                <span
                  v-for="(item, i) in project.analysis.review.result.disbursement_plan"
                  :key="i"
                >
                  <strong v-if="item">{{ i + 1 }} : </strong> {{ item }} <br>
                </span>
              </td>
              <td v-else />
            </tr>
            <tr>
              <td class="text-overline">
                Risques identifiés
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.review &&
                    project.analysis.review.result
                  )
                    ?
                      project.analysis.review.result.identified_risk
                    :
                      ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Mitigation des riques
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.review &&
                    project.analysis.review.result
                  )
                    ?
                      project.analysis.review.result.mitigation_of_risks
                    :
                      ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Conditions suspensives
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.review &&
                    project.analysis.review.result
                  )
                    ?
                      project.analysis.review.result.conditions_precedent
                    :
                      ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Recommandations
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.review &&
                    project.analysis.review.result
                  )
                    ?
                      project.analysis.review.result.recommendation
                    :
                      ''
                }}
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </base-material-card>
    </v-row>
    <v-row justify="center">
      <base-material-card
        color="primary"
        inline
        title="Avis DRE"
        class="px-5 py-1 mt-5"
        width="750px"
      >
        <v-simple-table>
          <tbody>
            <tr>
              <td class="text-overline">
                Avis motivé
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.risk_review &&
                    project.analysis.risk_review.result
                  )
                    ?
                      project.analysis.risk_review.result.risk_advice
                    :
                      ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Montant (XOF)
              </td>
              <td>
                {{
                  ((
                    project.analysis &&
                    project.analysis.risk_review &&
                    project.analysis.risk_review.result
                  )
                    ?
                      project.analysis.risk_review.result.amount
                    :
                      0
                  ) | formatNumber
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Taux d'intérêt
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.risk_review &&
                    project.analysis.risk_review.result
                  )
                    ?
                      project.analysis.risk_review.result.interest_rate
                    :
                      ''
                }} %
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Durée (mois)
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.risk_review &&
                    project.analysis.risk_review.result
                  )
                    ?
                      project.analysis.risk_review.result.duration
                    :
                      ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Échéance
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.risk_review &&
                    project.analysis.risk_review.result
                  )
                    ?
                      project.analysis.risk_review.result.deadline
                    :
                      ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Différé (en mois)
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.risk_review &&
                    project.analysis.risk_review.result
                  )
                    ?
                      project.analysis.risk_review.result.deferred
                    :
                      ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Garanties
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.risk_review &&
                    project.analysis.risk_review.result
                  )
                    ?
                      project.analysis.risk_review.result.guarantees
                    :
                      ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Plan de décaissement
              </td>
              <td
                v-if="project.analysis &&
                  project.analysis.risk_review &&
                  project.analysis.risk_review.result &&
                  project.analysis.risk_review.result.disbursement_plan"
              >
                <span
                  v-for="(item, i) in project.analysis.risk_review.result.disbursement_plan"
                  :key="i"
                >
                  <strong v-if="item">{{ i + 1 }} : </strong> {{ item }} <br>
                </span>
              </td>
              <td v-else />
            </tr>
            <tr>
              <td class="text-overline">
                Risques identifiés
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.risk_review &&
                    project.analysis.risk_review.result
                  )
                    ?
                      project.analysis.risk_review.result.identified_risk
                    :
                      ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Mitigation des riques
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.risk_review &&
                    project.analysis.risk_review.result
                  )
                    ?
                      project.analysis.risk_review.result.mitigation_of_risks
                    :
                      ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Conditions suspensives
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.risk_review &&
                    project.analysis.risk_review.result
                  )
                    ?
                      project.analysis.risk_review.result.conditions_precedent
                    :
                      ''
                }}
              </td>
            </tr>
            <tr>
              <td class="text-overline">
                Recommandations
              </td>
              <td>
                {{
                  (
                    project.analysis &&
                    project.analysis.risk_review &&
                    project.analysis.risk_review.result
                  )
                    ?
                      project.analysis.risk_review.result.recommendation
                    :
                      ''
                }}
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </base-material-card>
    </v-row>
    <v-row />
  </v-container>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'SummarySheet',
    filters: {
      formatNumber (value) {
        if (value !== null) {
          return parseInt(value, 10).toLocaleString('fr-FR')
        } else {
          return '0'
        }
      },
      formatDate (value) {
        moment.locale('fr')
        if (value) {
          return moment(String(value)).format('ll')
        }
      },
      getAge (value) {
        if (value) {
          return moment().diff(moment(value, 'YYYY-MM-DD'), 'years')
        }
      },
    },
    props: {
      project: {
        type: Object,
        required: true,
      },
    },
  }
</script>
