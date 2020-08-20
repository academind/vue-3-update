<template>
  <div>
    <goals-list :goals="filteredGoals"></goals-list>
    <add-goal @add-goal="addGoal"></add-goal>
  </div>
</template>

<script>
import GoalsList from "./GoalsList.vue";
import AddGoal from "./AddGoal.vue";

export default {
  components: {
    GoalsList,
    AddGoal,
  },
  data() {
    return {
      goals: [],
    };
  },
  computed: {
    filteredGoals() {
      return this.goals.filter(
        (goal) => !goal.text.includes("Angular") && !goal.text.includes("React")
      );
    },
  },
  methods: {
    addGoal(text) {
      const newGoal = {
        id: new Date().toISOString(),
        text: text,
      };
      this.goals.push(newGoal);
    },
  },
};
</script>