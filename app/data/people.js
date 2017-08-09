var people = [
    {
        name: 'Stan Marsh',
        photo: 'http://southparkstudios.mtvnimages.com/shared/characters/kids/stan-marsh.png?height=98',
        scores: ['5','5','5','5','5','5','5','5','5','5',]
    },
    {
        name: 'Eric Cartman',
        photo: 'http://wiki.southpark.cc.com/wiki/Eric_Cartman',
        scores: ['4','4','4','4','4','4','4','4','4','4',]
    },
    {
        name: 'Kenny McCormick',
        photo: 'http://southparkstudios.mtvnimages.com/shared/characters/kids/kenny-mccormick.png?height=98',
        scores: ['3','3','3','3','3','3','3','3','3','3']
    },
    {
        name: 'Kyle Broflovski',
        photo: 'http://southparkstudios.mtvnimages.com/shared/characters/kids/kyle-broflovski.png?height=98',
        scores: ['2','2','2','2','2','2','2','2','2','2']
    },
];

module.exports = function(newUser) {
    if (newUser) {
        people.push(newUser);
    }
    return people;
}
