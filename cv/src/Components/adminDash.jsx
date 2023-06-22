import { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Add, Delete, Edit } from '@mui/icons-material'; 

const AdminPage = () => {
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [vaccines, setVaccines] = useState([]);
    const [editVaccine, setEditVaccine] = useState({});
    const [newVaccine, setNewVaccine] = useState({
      name: '',
      description: '',
    });
    const handleOpenAddDialog = () => {
        setOpenAddDialog(true);
      };
      
      const handleCloseAddDialog = () => {
        setOpenAddDialog(false);
      };
      
      const handleOpenEditDialog = (vaccine) => {
        setEditVaccine(vaccine);
        setOpenEditDialog(true);
      };
      
      const handleCloseEditDialog = () => {
        setOpenEditDialog(false);
      };
      const handleAddVaccine = () => {
        setVaccines([...vaccines, newVaccine]);
        setNewVaccine({ name: '', description: '' });
        handleCloseAddDialog();
      };
      
      const handleEditVaccine = () => {
        const updatedVaccines = vaccines.map((vaccine) =>
          vaccine === editVaccine ? { ...editVaccine } : vaccine
        );
        setVaccines(updatedVaccines);
        handleCloseEditDialog();
      };
      
      const handleDeleteVaccine = (vaccine) => {
        const updatedVaccines = vaccines.filter((v) => v !== vaccine);
        setVaccines(updatedVaccines);
      };
      return (
        <Container maxWidth="md" style={{ marginTop: '20px' }}>
          <Typography variant="h4" align="center" gutterBottom>
            صفحة الادمن- نظام معلومات لقاحات الاطفال
          </Typography>
      
          <Button
            variant="outlined"
            color="primary"
            startIcon={<Add />}
            onClick={handleOpenAddDialog}
            style={{ marginBottom: '20px' }}
          >
        اضف لقاحا
          </Button>
      
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>الاسم</TableCell>
                  <TableCell> الحجم</TableCell>
                  <TableCell>الشركة</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {vaccines.map((vaccine, index) => (
                  <TableRow key={index}>
                    <TableCell>{vaccine.name}</TableCell>
                    <TableCell>{vaccine.description}</TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => handleOpenEditDialog(vaccine)}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        color="secondary"
                        onClick={() => handleDeleteVaccine(vaccine)}
                      >
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      
          {/* Add Vaccine Dialog */}
          <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
            <DialogTitle>اضف لقاحا</DialogTitle>
            <DialogContent>
              <TextField
                label="Name"
                fullWidth
                value={newVaccine.name}
                onChange={(e) =>
                  setNewVaccine({ ...newVaccine, name: e.target.value })
                }
              />
              <TextField
                label="Description"
                fullWidth
                value={newVaccine.description}
                onChange={(e) =>
                  setNewVaccine({ ...newVaccine, description: e.target.value })
                }
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseAddDialog} color="primary">
                حذف
              </Button>
              <Button onClick={handleAddVaccine} color="primary">
                اضافة
              </Button>
            </DialogActions>
          </Dialog>
      
          {/* Edit Vaccine Dialog */}
          <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
            <DialogTitle>تعديل اللقاح</DialogTitle>
            <DialogContent>
              <TextField
                label="Name"
                fullWidth
                value={editVaccine.name}
                onChange={(e) =>
                  setEditVaccine({ ...editVaccine, name: e.target.value })
                }
              />
              <TextField
                label="Description"
                fullWidth
                value={editVaccine.description}
                onChange={(e) =>
                  setEditVaccine({ ...editVaccine, description: e.target.value })
                }
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseEditDialog} color="primary">
                حذف
              </Button>
              <Button onClick={handleEditVaccine} color="primary">
                حفظ
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      );
}
export default AdminPage;