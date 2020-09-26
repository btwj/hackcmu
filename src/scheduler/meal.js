export const assign_meals = (blocks) => {
    const ideal_lunch = 12 * 60;
    const ideal_dinner = 18 * 60;

    let meal_blocks = [];
    let new_blocks = [];

    blocks.map((day, day_idx) => {
        let lunch_blocks = [...day].sort((a, b) => {
            return Math.pow(a.start - ideal_lunch, 2) - Math.pow(b.start - ideal_lunch, 2);
        });
        let lunch_block = lunch_blocks[0];

        let dinner_blocks = [...day].sort((a, b) => {
            return Math.pow(a.start - ideal_dinner, 2) - Math.pow(b.start - ideal_dinner, 2);
        });
        let dinner_block = dinner_blocks[0];

        meal_blocks.push([lunch_block, dinner_block]);
        new_blocks = new_blocks.concat(day.filter(event => {
            return (event.start != dinner_block.start) && (event.start != lunch_block.start);
        }).map(event => ({...event, day: day_idx})));
    });

    return [meal_blocks, new_blocks];
}