document.addEventListener('DOMContentLoaded', function() {
    const timelineData = [
        {
            date: 'Dec 2022 - Present',
            title: 'Associate Cloud Engineer',
            description: 'At Cloudifyops Private limited, I specialize in Cloud/DevOps technology focused on user management, infrastructure monitoring, and designing cloud-based solutions.'
        },
        {
            date: 'Aug 2019 - Dec 2022',
            title: 'Programmer',
            description: 'Experienced Learning & Development strategist, effectively identifying and tracking training programs to meet development needs.'
        },
        {
            date: 'June 2018 - Jul 2019',
            title: 'Junior Account Receivable',
            description: 'Skilled in managing Accounts receivable for US-based clients, implementing best practices, and reducing outstanding receivables through meticulous record-keeping.'
        }
    ];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});
