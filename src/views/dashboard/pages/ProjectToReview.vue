<template>
  <v-container
    id="projectToReview"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col cols="8">
        <base-material-alert
          v-if="errorMessage"
          color="error"
          dark
          dismissible
        >
          <span
            class="text-uppercase"
            v-text="errorMessage"
          /> — {{ errorMessage }}
        </base-material-alert>
      </v-col>
    </v-row>
    <v-row
      class="mt-n5"
    />
    <base-material-card
      color="secondary"
      icon="mdi-table"
      inline
      :title="`Liste des projets à analyser/projets analysé :  ${totalItems} projets`"
      class="px-5 py-3 mb-5"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom(s)</th>
            <th>Intitulé</th>
            <th>Secteur</th>
            <th>Sous-secteur</th>
            <th class="text-right">
              Montant sollicité
            </th>
            <th class="text-right">
              Montant Prêt
            </th>
            <th>
              Responsable
            </th>
            <th>
              Gestionnaire de portefeuille
            </th>
            <th>
              Analyste
            </th>
            <th class="text-center">
              Statut
            </th>
            <th class="text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(item,k) in projects"
            :key="k"
          >
            <td>{{ (item.recipient && item.recipient.lastname) ? item.recipient.lastname : '' }}</td>
            <td>{{ (item.recipient && item.recipient.firstname) ? item.recipient.firstname : '' }}</td>
            <td>{{ item.entitled.substr(0, 100) }}</td>
            <td>
              {{ item.sectors.map(sub => sectors.find(sec => sec.id === sub).name).join(' / ') }}
            </td>
            <td>
              {{ item.subsectors.map(sub => subsectors.find(subSec => subSec.id === sub).name).join(' / ') }}
            </td>
            <td class="text-right">
              {{ item.financial_infos.amount_requested | formatNumber }} XOF
            </td>
            <td class="text-right">
              {{ item.analysis.analysis.result.output.total_loan | formatNumber }} XOF
            </td>
            <td>
              <v-menu
                v-if="agents && item.analysis && item.analysis.review_owner.agent"
                bottom
                min-width="250px"
                rounded
                offset-y
                class="pa-0"
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    icon
                    x-large
                    v-on="on"
                  >
                    <v-avatar
                      v-if="item.analysis.review_owner.state === 'waiting'"
                      color="info"
                      size="36"
                    >
                      <span class="white--text text-subtitle-1">
                        {{ agents.find(a => a.id === item.analysis.review_owner.agent).initials }}
                      </span>
                    </v-avatar>
                    <v-avatar
                      v-if="item.analysis.review_owner.state === 'approved'"
                      color="success"
                      size="36"
                    >
                      <span class="white--text text-subtitle-1">
                        {{ agents.find(a => a.id === item.analysis.review_owner.agent).initials }}
                      </span>
                    </v-avatar>
                    <v-avatar
                      v-if="item.analysis.review_owner.state === 'rejected'"
                      color="error"
                      size="36"
                    >
                      <span class="white--text text-subtitle-1">
                        {{ agents.find(a => a.id === item.analysis.review_owner.agent).initials }}
                      </span>
                    </v-avatar>
                  </v-btn>
                </template>
                <!--<v-card>
                  <v-list-item-content class="justify-center">
                    <div class="mx-auto text-center">
                      <v-avatar
                        color="secondary"
                      >
                        <span class="white--text subtitle-1">{{ agents.find(a => a.id === item.analysis.program_owner.agent).initials }}</span>
                      </v-avatar>
                      <h3>{{ agents.find(a => a.id === item.analysis.program_owner.agent).fullName }}</h3>
                      <p class="caption mt-1">
                        {{ agents.find(a => a.id === item.analysis.program_owner.agent).board.name }}
                      </p>
                    </div>
                  </v-list-item-content>
                </v-card>-->
                <v-card class="ma-0">
                  <v-list-item-content class="justify-center">
                    <div class="text-center">
                      <v-avatar
                        color="secondary"
                      >
                        <span class="white--text text-subtitle-1">{{ agents.find(a => a.id === item.analysis.review_owner.agent).initials }}</span>
                      </v-avatar>
                      <h3>{{ agents.find(a => a.id === item.analysis.review_owner.agent).fullName }}</h3>
                      <p class="text-caption mt-1">
                        {{ agents.find(a => a.id === item.analysis.review_owner.agent).board.name }}
                      </p>
                      <v-divider class="my-3" />
                      <p class="text-body-2 mt-1">
                        Assigné: {{ item.analysis.review_owner.assigned_at | formatDate }}
                      </p>
                      <v-divider
                        v-if="item.analysis.review_owner.end_at"
                        class="my-3"
                      />
                      <p
                        v-if="item.analysis.review_owner.end_at"
                        class="text-body-2 mt-1"
                      >
                        Validation: {{ item.analysis.review_owner.end_at | formatDate }}
                      </p>
                      <v-divider class="my-3" />
                      <v-btn
                        depressed
                        rounded
                        text
                        color="success"
                        :disabled="item.analysis.review_owner.agent !== agent.id || (item.analysis.portfolio_owner && item.analysis.portfolio_owner.state === 'waiting')"
                        @click="openValidateAnalysisDialog('approved', 'reviewOwner', item.analysis._id, item.entitled)"
                      >
                        Valider la revue
                        <v-icon
                          dark
                          right
                        >
                          mdi-checkbox-marked-circle
                        </v-icon>
                      </v-btn>
                      <v-divider class="my-3" />
                      <v-btn
                        depressed
                        rounded
                        text
                        color="error"
                        :disabled="item.analysis.review_owner.agent !== agent.id || (item.analysis.portfolio_owner && item.analysis.portfolio_owner.state === 'waiting')"
                        @click="openValidateAnalysisDialog('rejected', 'reviewOwner', item.analysis._id, item.entitled)"
                      >
                        Rejetter la revue
                        <v-icon
                          dark
                          right
                        >
                          mdi-cancel
                        </v-icon>
                      </v-btn>
                    </div>
                  </v-list-item-content>
                </v-card>
              </v-menu>
            </td>
            <td>
              <v-menu
                v-if="agents && item.analysis && item.analysis.portfolio_owner && item.analysis.portfolio_owner.agent"
                bottom
                min-width="250px"
                rounded
                offset-y
                class="pa-0"
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    icon
                    x-large
                    v-on="on"
                  >
                    <v-avatar
                      v-if="item.analysis.portfolio_owner.state === 'waiting'"
                      color="info"
                      size="36"
                    >
                      <span class="white--text text-subtitle-1">
                        {{ agents.find(a => a.id === item.analysis.portfolio_owner.agent).initials }}
                      </span>
                    </v-avatar>
                    <v-avatar
                      v-if="item.analysis.portfolio_owner.state === 'approved'"
                      color="success"
                      size="36"
                    >
                      <span class="white--text text-subtitle-1">
                        {{ agents.find(a => a.id === item.analysis.portfolio_owner.agent).initials }}
                      </span>
                    </v-avatar>
                    <v-avatar
                      v-if="item.analysis.portfolio_owner.state === 'rejected'"
                      color="error"
                      size="36"
                    >
                      <span class="white--text text-subtitle-1">
                        {{ agents.find(a => a.id === item.analysis.portfolio_owner.agent).initials }}
                      </span>
                    </v-avatar>
                  </v-btn>
                </template>
                <v-card class="ma-0">
                  <v-list-item-content class="justify-center">
                    <div class="mx-auto text-center">
                      <v-avatar
                        color="secondary"
                      >
                        <span class="white--text text-subtitle-1">{{ agents.find(a => a.id === item.analysis.portfolio_owner.agent).initials }}</span>
                      </v-avatar>
                      <h3>{{ agents.find(a => a.id === item.analysis.portfolio_owner.agent).fullName }}</h3>
                      <p class="text-caption mt-1">
                        {{ agents.find(a => a.id === item.analysis.portfolio_owner.agent).board.name }}
                      </p>
                      <v-divider class="my-3" />
                      <p class="text-body-2 mt-1">
                        Assigné: {{ item.analysis.portfolio_owner.assigned_at | formatDate }}
                      </p>
                      <v-divider
                        v-if="item.analysis.portfolio_owner.end_at"
                        class="my-3"
                      />
                      <p
                        v-if="item.analysis.portfolio_owner.end_at"
                        class="text-body-2 mt-1"
                      >
                        Validation: {{ item.analysis.portfolio_owner.end_at | formatDate }}
                      </p>
                      <v-divider class="my-3" />
                      <v-btn
                        depressed
                        rounded
                        text
                        color="success"
                        :disabled="item.analysis.portfolio_owner.agent !== agent.id || (item.analysis.review && item.analysis.review.state === 'waiting')"
                        @click="openValidateAnalysisDialog('approved', 'portfolio', item.analysis._id, item.entitled)"
                      >
                        Valider la revue
                        <v-icon
                          dark
                          right
                        >
                          mdi-checkbox-marked-circle
                        </v-icon>
                      </v-btn>
                      <v-divider class="my-3" />
                      <v-btn
                        depressed
                        rounded
                        text
                        color="error"
                        :disabled="item.analysis.portfolio_owner.agent !== agent.id || (item.analysis.review && item.analysis.review.state === 'waiting')"
                        @click="openValidateAnalysisDialog('rejected', 'portfolio', item.analysis._id, item.entitled)"
                      >
                        Rejetter la revue
                        <v-icon
                          dark
                          right
                        >
                          mdi-cancel
                        </v-icon>
                      </v-btn>
                    </div>
                  </v-list-item-content>
                </v-card>
              </v-menu>
            </td>
            <td>
              <v-menu
                v-if="agents && item.analysis && item.analysis.review && item.analysis.review.agent"
                bottom
                min-width="250px"
                rounded
                offset-y
                class="pa-0"
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    icon
                    x-large
                    v-on="on"
                  >
                    <v-avatar
                      v-if="item.analysis.review.state === 'waiting'"
                      color="info"
                      size="36"
                    >
                      <span class="white--text text-subtitle-1">
                        {{ agents.find(a => a.id === item.analysis.review.agent).initials }}
                      </span>
                    </v-avatar>
                    <v-avatar
                      v-if="item.analysis.review.state === 'approved'"
                      color="success"
                      size="36"
                    >
                      <span class="white--text text-subtitle-1">
                        {{ agents.find(a => a.id === item.analysis.review.agent).initials }}
                      </span>
                    </v-avatar>
                    <v-avatar
                      v-if="item.analysis.review.state === 'rejected'"
                      color="error"
                      size="36"
                    >
                      <span class="white--text text-subtitle-1">
                        {{ agents.find(a => a.id === item.analysis.review.agent).initials }}
                      </span>
                    </v-avatar>
                  </v-btn>
                </template>
                <v-card class="ma-0">
                  <v-list-item-content class="justify-center">
                    <div class="mx-auto text-center">
                      <v-avatar
                        color="secondary"
                      >
                        <span class="white--text text-subtitle-1">{{ agents.find(a => a.id === item.analysis.review.agent).initials }}</span>
                      </v-avatar>
                      <h3>{{ agents.find(a => a.id === item.analysis.review.agent).fullName }}</h3>
                      <p class="text-body-2 mt-1">
                        {{ agents.find(a => a.id === item.analysis.review.agent).board.name }}
                      </p>
                      <v-divider class="my-3" />
                      <p class="text-body-2 mt-1">
                        Assigné: {{ item.analysis.review.assigned_at | formatDate }}
                      </p>
                      <v-divider
                        v-if="item.analysis.review.end_at"
                        class="my-3"
                      />
                      <p
                        v-if="item.analysis.review.end_at"
                        class="text-body-2 mt-1"
                      >
                        Analysé: {{ item.analysis.review.end_at | formatDate }}
                      </p>
                    </div>
                  </v-list-item-content>
                </v-card>
              </v-menu>
            </td>
            <td class="text-center">
              <v-chip
                v-if="item.analysis && item.analysis.financial && item.analysis.financial.state === 'approved'"
                class="ma-2"
                color="green"
                outlined
              >
                Avis financier
              </v-chip>
              <v-chip
                v-else-if=" item.analysis && item.analysis.financial && item.analysis.financial.state === 'rejected'"
                class="ma-2"
                color="red"
                outlined
              >
                Avis financier
              </v-chip>
              <v-chip
                v-else-if=" item.analysis && item.analysis.financial && item.analysis.financial.state === 'waiting' &&
                  item.analysis.review.state !== 'waiting' &&
                  item.analysis.portfolio_owner.state !== 'waiting' &&
                  item.analysis.review_owner !== 'waiting'
                "
                class="ma-2"
                color="info"
                outlined
              >
                Avis financier
              </v-chip>
              <v-chip
                v-else
                class="ma-2"
                color="grey"
                outlined
              >
                Avis financier
              </v-chip>
            </td>
            <td class="text-center">
              <v-menu
                bottom
                left
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    icon
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list
                  nav
                  dense
                >
                  <v-list-item-group
                    color="infos"
                  >
                    <v-list-item
                      @click="showProjectInfos(item)"
                    >
                      <v-list-item-icon>
                        <v-icon
                          small
                        >
                          mdi-file-table-outline
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Fiche projet</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item
                      @click="showProjectFinancialInfos(item.financial_infos)"
                    >
                      <v-list-item-icon>
                        <v-icon
                          small
                        >
                          mdi-finance
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Informations financière</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item
                      @click="showProjectMarketInfos(item.market_infos)"
                    >
                      <v-list-item-icon>
                        <v-icon
                          small
                        >
                          mdi-shopping-outline
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Informations de marché</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <!-- comment text -->
                    <v-list-item
                      @click="openAnalysisCommentDialog(item.analysis._id)"
                    >
                      <v-list-item-icon>
                        <v-icon
                          small
                        >
                          mdi-comment-text-multiple
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Commentaires</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <!--<v-list-item
                      :disabled="item.financial_infos.amount_requested < 500000 || item.analysis.sector_owner.agent !== agent.id"
                      @click="selectAgent(item.analysis._id)"
                    >
                      <v-list-item-icon>
                        <v-icon
                          small
                        >
                          mdi-file-account
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Affecter le projet</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>-->
                    <v-list-item
                      :disabled="agent.role !== 'directionOwner' ||
                        agent.board.tag !== 'di' ||
                        (item.analysis.program_owner && item.analysis.program_owner.state === 'waiting') ||
                        (item.analysis.sector_owner && item.analysis.sector_owner.state === 'waiting') ||
                        (item.analysis.analysis && item.analysis.analysis.state === 'waiting')
                      "
                      @click="openValidateAnalysisDialog('', 'financial', item.analysis._id, item.entitled)"
                    >
                      <v-list-item-icon>
                        <v-icon
                          small
                        >
                          mdi-gavel
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Validation financière</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item
                      disabled
                    >
                      <v-list-item-icon>
                        <v-icon
                          small
                        >
                          mdi-text-box-outline
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Fiche de synthèse</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <!--<v-list-item
                      :disabled="item.financial_infos.amount_requested < 500000 ||
                        item.analysis.review.agent === agent.id
                      "
                      to="/reviews/financial-reviews"
                    >
                      <v-list-item-icon>
                        <v-icon
                          small
                        >
                          mdi-file-compare
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Faire la revue</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>-->
                    <v-list-item
                      :disabled="item.financial_infos.amount_requested < 500000 || item.analysis.review.agent !== agent.id"
                      :to="`/project-analysis/${item.id}`"
                    >
                      <v-list-item-icon>
                        <v-icon
                          small
                        >
                          mdi-file-compare
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Faire la revue du projet</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-menu>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
      <v-divider />
      <div class="text-center">
        <v-container>
          <v-row justify="center">
            <v-col cols="1">
              <v-container class="max-width">
                <v-select
                  v-model="perPage"
                  :items="itemsPerPage"
                  label="Projects par page"
                  @change="setPage"
                />
              </v-container>
            </v-col>
            <v-col cols="6">
              <v-container class="max-width">
                <v-pagination
                  v-model="page"
                  class="my-4"
                  :length="totalPages"
                  @input="setPage"
                />
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </base-material-card>
    <div class="py-3" />
    <!-- recipient info dialog -->
    <v-dialog
      v-model="recipientDialog"
      max-width="900px"
    >
      <recipient-infos :recipient="recipientInfos" />
    </v-dialog>
    <!-- project info dialog -->
    <v-dialog
      v-model="projectDialog"
      max-width="900px"
    >
      <project-infos :project="projectInfos" />
    </v-dialog>
    <!-- financial info dialog -->
    <v-dialog
      v-model="financialDialog"
      max-width="900px"
    >
      <project-financial-infos :financial="projectFinancialInfos" />
    </v-dialog>
    <!-- market infos dialog -->
    <v-dialog
      v-model="marketDialog"
      max-width="900px"
    >
      <project-market-infos :market="projectMarketInfos" />
    </v-dialog>
    <!-- analysis comment Dialog -->
    <v-dialog
      v-model="analysisCommentDialog"
      scrollable
      max-width="500px"
    >
      <analysis-comments
        :analysis="selectedAnalysisId"
        :agent="agent"
        :agents="agents"
      />
    </v-dialog>
    <!-- dispatch project dialog -->
    <!--<v-dialog
      v-model="affectProjectDialog"
      persistent
      max-width="350"
    >
      <v-card>
        <v-card-title class="subtitle-1">
          Sélection un agent
        </v-card-title>
        <v-card-text>
          <v-select
            v-model="toAnalyse.agent"
            class="ma-0 pa-0"
            :items="agents"
            item-text="fullName"
            item-value="id"
            dense
            label="Analyste"
            single-line
            outlined
          />
        </v-card-text>
        <v-card-text>
          <v-textarea
            v-model="toAnalyse.text"
            label="Instruction d'analyse"
            outlined
            dense
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="closeSelectAgentDialog"
          >
            Annuler
          </v-btn>
          <v-btn
            color="primary"
            text
            :disabled="!toAnalyse.agent || !toAnalyse.analysis"
            @click="affectProject"
          >
            Affecter le projet
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>-->
    <!-- validate analysis dialog -->
    <v-dialog
      v-model="validateAnalysisDialog"
      persistent
      max-width="350"
    >
      <v-card>
        <v-card-title
          v-if="advice.state === 'approved'"
          class="text-subtitle-1"
        >
          Avis favorable projet
          <v-divider />
          <p class="text-caption">
            {{ advice.title }}
          </p>
        </v-card-title>
        <v-card-title
          v-if="advice.state === 'rejected'"
          class="text-subtitle-1"
        >
          Avis défavorable projet
          <v-divider />
          <p class="text-caption">
            {{ advice.title }}
          </p>
        </v-card-title>
        <v-card-title
          v-if="advice.state === ''"
          class="text-subtitle-1"
        >
          Avis technique projet
          <v-divider />
          <p class="text-caption">
            {{ advice.title }}
          </p>
        </v-card-title>
        <v-card-text>
          <v-select
            v-model="advice.state"
            class="ma-0 pa-0"
            :items="[{ id: 'approved', text: 'Avis favorable' }, { id: 'rejected', text: 'avis défavorable' }]"
            item-text="text"
            item-value="id"
            dense
            single-line
            outlined
          />
        </v-card-text>
        <v-card-text>
          <v-textarea
            v-model="advice.text"
            label="commentaire de validation"
            outlined
            dense
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="red darken-1"
            text
            @click="closeValidateAnalysisDialog"
          >
            Annuler
          </v-btn>
          <v-btn
            color="primary"
            text
            :disabled="!advice.text || !advice.type || !advice.analysis || !advice.state"
            @click="validateAnalysis"
          >
            Enregistrer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
  </v-container>
</template>

<script>
  import RecipientInfos from '@/views/dashboard/component/recipient/recipient'
  import ProjectInfos from '@/views/dashboard/component/recipient/project'
  import ProjectFinancialInfos from '@/views/dashboard/component/recipient/financial'
  import ProjectMarketInfos from '@/views/dashboard/component/recipient/market'
  import AnalysisComments from '@/views/dashboard/component/AnalysisComments'
  export default {
    name: 'ProjectToReview',
    components: {
      RecipientInfos,
      ProjectInfos,
      ProjectFinancialInfos,
      ProjectMarketInfos,
      AnalysisComments,
    },
    filters: {
      formatNumber (value) {
        if (value !== null) {
          return parseInt(value, 10).toLocaleString('fr-FR')
        } else {
          return '0'
        }
      },
      formatDate (value) {
        const moment = require('moment')
        moment.locale('fr')
        return value ? moment(value).format('lll') : ''
      },
    },
    data () {
      return {
        page: 1,
        perPage: 10,
        itemsPerPage: [10, 20, 50, 100, 200, 300, 400, 500],
        dialog: false,
        recipientDialog: false,
        projectDialog: false,
        financialDialog: false,
        marketDialog: false,
        affectProjectDialog: false,
        validateAnalysisDialog: false,
        analysisCommentDialog: false,
        selectedAnalysisId: null,
        toAnalyse: {
          analysis: null,
          agent: null,
          text: null,
          sector: null,
        },
        advice: {
          text: null,
          state: null,
          type: null,
          analysis: null,
          title: null,
        },
        recipient: {},
        project: {},
        marketInfo: {},
        financialInfo: {},
        recipientInfos: {},
        projectInfos: {},
        projectFinancialInfos: {},
        projectMarketInfos: {},
        actions: [
          {
            color: 'info',
            icon: 'mdi-account',
            to: 'projects',
          },
          {
            color: 'success',
            icon: 'mdi-pencil',
            to: 'projects',
          },
          {
            color: 'error',
            icon: 'mdi-head-dots-horizontal',
            to: 'project-analysis',
          },
        ],
      }
    },
    computed: {
      loading () {
        return this.$store.state.utilities.loading
      },
      errorMessage () {
        return this.$store.getters['utilities/getError']
      },
      projects () {
        return this.$store.state.projects.projects
      },
      totalItems () {
        return this.$store.state.projects.totalItems
      },
      totalPages () {
        if (this.perPage > this.totalItems) {
          return 1
        } else {
          return (this.totalItems % this.perPage === 0) ? this.totalItems / this.perPage : parseInt((this.totalItems / this.perPage)) + 1
        }
      },
      agent () {
        return this.$store.state.agents.agent
      },
      agents () {
        return this.$store.state.agents.agents
      },
      sectors () {
        return this.$store.state.utilities.sectors
      },
      subsectors () {
        return this.$store.state.utilities.subsectors
      },
    },
    async beforeCreate () {
      await this.$store.dispatch('agents/fetchAgents')
      await this.$store.dispatch('analysis/fetchAnalysisByReviewOwner', { sectorOwner: this.agent.id, page: this.page, item: this.perPage })
    },
    methods: {
      processRecipientData (data) {
        Object.assign(this.recipient, data)
      },
      processProjectData (data) {
        Object.assign(this.project, data)
      },
      processMarketInfosData (data) {
        Object.assign(this.marketInfo, data)
      },
      processFinancialInfosData (data) {
        Object.assign(this.financialInfo, data)
      },
      showRecipientInfos (data) {
        this.recipientInfos = data
        this.recipientDialog = true
      },
      showProjectInfos (data) {
        this.projectInfos = data
        this.projectDialog = true
      },
      showProjectFinancialInfos (data) {
        this.projectFinancialInfos = data
        this.financialDialog = true
      },
      showProjectMarketInfos (data) {
        this.projectMarketInfos = data
        this.marketDialog = true
      },
      /*
      selectAgent (analysisId, sectorId) {
        this.toAnalyse.analysis = analysisId
        this.toAnalyse.sector = sectorId
        this.affectProjectDialog = true
      },
      */
      closeSelectAgentDialog () {
        this.affectProjectDialog = false
        this.toAnalyse = { analysis: null, agent: null, text: null, title: null }
      },
      openValidateAnalysisDialog (state, type, analysisId, title) {
        this.validateAnalysisDialog = true
        this.advice.state = state
        this.advice.type = type
        this.advice.analysis = analysisId
        this.advice.title = title
      },
      openAnalysisCommentDialog (analysisId) {
        this.selectedAnalysisId = analysisId
        this.analysisCommentDialog = true
      },
      closeValidateAnalysisDialog () {
        this.validateAnalysisDialog = false
        this.advice = { text: null, analysis: null, type: null, state: null }
      },
      /*
      affectProject () {
        this.$store.dispatch(
          'analysis/assignProjectToAgent',
          {
            ...this.toAnalyse,
            author: this.agent.id,
          },
        )
        this.closeSelectAgentDialog()
      },
      */
      validateAnalysis () {
        this.$store.dispatch(
          'analysis/approveAnalysisResult',
          { ...this.advice, author: this.agent.id },
        )

        this.closeValidateAnalysisDialog()
      },
      async setPage () {
        await this.$store.dispatch('analysis/fetchAnalysisByReviewOwner', { sectorOwner: this.agent.id, page: this.page, item: this.perPage })
      },
    },
  }
</script>
