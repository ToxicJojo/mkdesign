const historyMixin = {
  methods: {
    addToHistory (data) {
      // Get the history index from the route query
      const index = this.$router.currentRoute.query.index
      // If there is an index we are changing a descison that was already made.
      if (index !== undefined) {
        data.index = index
        this.$store.commit('editor/changeHistory', data)
      } else {
        this.$store.commit('editor/addToHistory', data)
      }
    },
    gotoNextWizard (wizardName) {
      if (this.$router.currentRoute.name === this.$store.state.editor.newestWizard) {
        this.$store.commit('editor/setNewestWizard', wizardName)
        this.$router.push(wizardName)
      } else {
        this.$router.push(this.$store.state.editor.newestWizard)
      }
    }
  },
}

export default historyMixin
