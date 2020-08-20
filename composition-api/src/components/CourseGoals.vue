<template>
  <div>
    <goals-list :goals="filteredGoals"></goals-list>
    <add-goal @add-goal="addGoal"></add-goal>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

import GoalsList from "./GoalsList.vue";
import AddGoal from "./AddGoal.vue";

export default {
  components: {
    GoalsList,
    AddGoal,
  },
  setup() {
    const goals = ref([]);

    const filteredGoals = computed(function() {
      return goals.value.filter(
        (goal) => !goal.text.includes("Angular") && !goal.text.includes("React")
      );
    });

    function addGoal(text) {
      const newGoal = {
        id: new Date().toISOString(),
        text: text,
      };
      goals.value.push(newGoal);
    }

    return {
      filteredGoals: filteredGoals,
      addGoal: addGoal
    };
  }
  // data() {
  //   return {
  //     goals: [],
  //   };
  // },
  // computed: {
  //   filteredGoals() {
  //     return this.goals.filter(
  //       (goal) => !goal.text.includes("Angular") && !goal.text.includes("React")
  //     );
  //   },
  // },
  // methods: {
  //   addGoal(text) {
  //     const newGoal = {
  //       id: new Date().toISOString(),
  //       text: text,
  //     };
  //     this.goals.push(newGoal);
  //   },
  // },
};
</script>