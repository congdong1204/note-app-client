import { Box, Card, CardContent, Grid, List, Typography } from '@mui/material'
import { useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

const NoteList = () => {
  const { noteId } = useParams()
  const [activeNoteId, setActiveNoteId] = useState(noteId)
  const folder = { notes: [{ id: 1, content: '<p>This is Dong</p>' }] }
  return (
    <Grid container height="100%">
      <Grid
        item
        xs={4}
        sx={{
          width: '100%',
          height: '100%',
          maxWidth: 360,
          bgcolor: '#f0ebe3',
          overflowY: 'auto',
          padding: '10px',
          textAlign: 'left',
        }}
      >
        <List
          subheader={
            <Box>
              <Typography sx={{ fontWeight: 'bold' }}>Notes</Typography>
            </Box>
          }
        >
          {folder.notes.map(({ id, content }) => {
            return (
              <Link
                key={id}
                to={`note/${id}`}
                style={{ textDecoration: 'none' }}
                onClick={() => setActiveNoteId(id)}
              >
                <Card sx={{ mb: '5px' }}>
                  <CardContent
                    sx={{
                      '&last-child': { pb: '10px' },
                      padding: '10px',
                      backgroundColor:
                        id === activeNoteId ? 'rgb(255 211 149)' : null,
                    }}
                  >
                    <div
                      style={{ fontSize: '14px', fontWeight: 'bold' }}
                      dangerouslySetInnerHTML={{
                        __html: `${content.substring(0, 30) || 'Empty'}`,
                      }}
                    />
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </List>
      </Grid>
      <Grid item xs={8}>
        <Outlet />
      </Grid>
    </Grid>
  )
}

export default NoteList
