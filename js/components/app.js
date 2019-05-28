var contacts = [
    {
        id: 1,
        firstName: 'Jan',
        lastName: 'Nowak',
        email: 'jan.nowak@gmail.com',
    },
    {
        id: 2,
        firstName: 'Adam',
        lastName: 'Kowalski',
        email: 'adam.kowalski@gmail.com',
    },
    {
        id: 3,
        firstName: 'Zbigniew',
        lastName: 'Koziolek',
        email: 'zibizibi94@gmail.com',
    }
];

var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
};


var App = React.createClass({
    render: function () {
        return (
            <div className={'app'}>
                <ContactForm contact={contactForm} />
                <Contacts items={contacts} />
            </div>
        );
    }
});