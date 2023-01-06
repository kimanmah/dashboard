import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if(title) {
            calendarApi.addEvent ({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            });
        }
    };

    const handleEventClick = (selected) => {
        if (
            window.confirm(
                `Are you sure you want to delete the task '${selected.event.title}'`
                )
                ) {
            selected.event.remove();
        }
    };

    return (<Box m="20px">
            <Header title="Calendar" subtitle="Upcoming activities and events" />

            <Box mt="40px" display="flex" justifyContent="left">

                            {/* CALENDAR */}
                            <Box flex="0 0 60%" p="20px" borderRadius="4px" backgroundColor={colors.primary[600]}>
                    <FullCalendar 
                    height="50vh"
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin,
                    ]}
                    headerToolbar={{
                        left: "prev,next,today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                    }}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable= {true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                    eventsSet={(events) => setCurrentEvents(events)}
                    initialEvents={[
                        { id: "8234", title: "All-day event", date: "2022-12-14" },
                        { id: "4321", title: "Christmas event", date: "2022-12-24" },
                        { id: "5432", title: "Timed event", date: "2022-12-28" }
                    ]}
                    />
                </Box>

            { /* CALENDAR SIDEBAR */ }
            <Box flex="0 0 20%" backgroundColor={colors.primary[600]}  ml="15px" p="20px" borderRadius="4px"  sx={{ alignSelf: 'flex-start' }}>
                <Typography variant="h4" fontWeight="bold">Upcoming</Typography>
                <List>
                    {currentEvents.map((event) => (
                        <ListItem
                        key={event.id}
                        sx={{ 
                            backgroundColor: colors.primary[700], 
                            margin: "10px 0", 
                            borderRadius: "2px", 
                    }}
                        >
<ListItemText 
primary={<Typography fontWeight="bold">{event.title}</Typography>}
secondary={
    <Typography fontSize="0.9em" color={colors.grey[200]}>
        {formatDate(event.start, {
            year: "numeric",
            month: "short",
            day: "numeric"
        })}
    </Typography>
}
 />
                        </ListItem>
                    ))}
                </List>
            </Box>



            </Box>
    </Box>
    );
};

export default Calendar;