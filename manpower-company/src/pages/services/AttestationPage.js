import LockIcon from '@mui/icons-material/Lock';
import { Box, Button, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

function AttestationPage() {
  const [isAdminDialogOpen, setIsAdminDialogOpen] = useState(false);
  const [adminId, setAdminId] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState('');
  const [requiredDocuments, setRequiredDocuments] = useState([
    {
      title: "Demand Letter",
      description: "Official document from the employer stating their requirement for workers",
      image: "/attestation/demand-letter.jpg"
    },
    {
      title: "Trade License Copy",
      description: "Valid business registration document"
    },
    {
      title: "Power Of Attorney Copy",
      description: "Required if signing authority name is not in trade license"
    },
    {
      title: "Emirates ID Copy",
      description: "Valid UAE identification document"
    },
    {
      title: "Passport Copy",
      description: "Valid passport of the authorized signatory"
    },
    {
      title: "Quota Copy",
      description: "Document showing approved manpower quota"
    }
  ]);
  const [uploading, setUploading] = useState(false);

  // This should be stored securely in environment variables or backend
  const ADMIN_ID = 'HIMAL_ADMIN_2024';

  // Load saved documents from localStorage on component mount
  useEffect(() => {
    const savedDocs = localStorage.getItem('attestationDocs');
    if (savedDocs) {
      setRequiredDocuments(JSON.parse(savedDocs));
    }
  }, []);

  const handleAdminLogin = () => {
    if (adminId === ADMIN_ID) {
      setIsAdmin(true);
      setError('');
      setIsAdminDialogOpen(false);
    } else {
      setError('Invalid Admin ID');
    }
  };

  const handleFileUpload = async (event, docIndex) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      // Validate file size (max 2MB to avoid localStorage limits)
      if (file.size > 2 * 1024 * 1024) {
        throw new Error('File size should be less than 2MB');
      }

      // Convert file to base64
      const base64 = await convertToBase64(file);
      
      // Update state
      const updatedDocs = [...requiredDocuments];
      updatedDocs[docIndex] = {
        ...updatedDocs[docIndex],
        image: base64
      };
      setRequiredDocuments(updatedDocs);

      // Save to localStorage
      localStorage.setItem('attestationDocs', JSON.stringify(updatedDocs));

      alert('Document updated successfully!');
    } catch (error) {
      console.error('Upload error:', error);
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  // Helper function to convert file to base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <Box sx={{ pt: 12, pb: 8 }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              color: '#1a237e',
              fontWeight: 700
            }}
          >
            Demand Attestation
          </Typography>

          <Button
            startIcon={<LockIcon />}
            onClick={() => setIsAdminDialogOpen(true)}
            sx={{
              color: '#1a237e',
              '&:hover': {
                backgroundColor: 'rgba(26, 35, 126, 0.08)',
              }
            }}
          >
            Admin Access
          </Button>
        </Box>

        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 6
          }}
        >
          Complete Attestation Support for Your Recruitment Needs
        </Typography>

        {/* Service Overview */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            mb: 6,
            backgroundColor: '#f8f9fa',
            borderLeft: '4px solid #1a237e'
          }}
        >
          <Typography variant="h5" color="primary" gutterBottom>
            Our Attestation Service
          </Typography>
          <Typography color="text.secondary" paragraph>
            Himal Recruitment Services Group handles all recruitment-related demand attestation on behalf of companies. 
            We manage the complete attestation process through Embassy, Foreign Affairs, and Chamber of Commerce, ensuring 
            a smooth and efficient documentation process for our clients.
          </Typography>
        </Paper>

        <Grid container spacing={4}>
          {requiredDocuments.map((doc, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <Typography
                  variant="h5"
                  color="primary"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  {doc.title}
                </Typography>

                <Typography
                  color="text.secondary"
                  paragraph
                >
                  {doc.description}
                </Typography>

                {doc.image && (
                  <Box
                    component="img"
                    src={doc.image}
                    alt={doc.title}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 2,
                      mt: 2
                    }}
                  />
                )}

                {isAdmin && (
                  <Box sx={{ mt: 2 }}>
                    <input
                      accept="image/*,.pdf"
                      style={{ display: 'none' }}
                      id={`file-upload-${index}`}
                      type="file"
                      onChange={(e) => handleFileUpload(e, index)}
                      disabled={uploading}
                    />
                    <label htmlFor={`file-upload-${index}`}>
                      <Button
                        variant="outlined"
                        component="span"
                        fullWidth
                        disabled={uploading}
                        sx={{
                          color: '#1a237e',
                          borderColor: '#1a237e',
                          '&:hover': {
                            borderColor: '#000051',
                            backgroundColor: 'rgba(26, 35, 126, 0.08)',
                          }
                        }}
                      >
                        {uploading ? (
                          <>
                            <CircularProgress size={24} sx={{ mr: 1 }} />
                            Uploading...
                          </>
                        ) : (
                          'Upload New Document'
                        )}
                      </Button>
                    </label>
                  </Box>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Admin Login Dialog */}
        <Dialog open={isAdminDialogOpen} onClose={() => setIsAdminDialogOpen(false)}>
          <DialogTitle>Admin Access</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Admin ID"
              type="password"
              fullWidth
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              error={!!error}
              helperText={error}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsAdminDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleAdminLogin}>Login</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
}

export default AttestationPage; 